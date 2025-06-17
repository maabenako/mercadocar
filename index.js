const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// Carregar a base de dados do arquivo CSV
const csvFilePath = 'categorias_com_subcategorias.csv';
const csv = require('csv-parser');

// Função para ler o arquivo CSV
const readCSV = async (filePath) => {
  return new Promise((resolve, reject) => {
    const rows = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => rows.push(row))
      .on('end', () => resolve(rows))
      .on('error', (err) => reject(err));
  });
};

// Função para buscar os dados de uma URL
const fetchData = async (url, headers) => {
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error(`Erro ao acessar ${url}:`, error.message);
    return null;
  }
};

// Função principal para realizar o scraping
const scrapeProducts = async () => {
  const data = await readCSV(csvFilePath);

  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
  };

  const productsData = [];

  for (const row of data) {
    const { URL: baseUrl, Categoria, Subcategoria, 'Sub-Subcategoria': SubSubcategoria } = row;

    console.log(`Processando URL base: ${baseUrl}`);

    for (let pageNumber = 1; pageNumber <= 50; pageNumber++) {
      const pageUrl = `${baseUrl}?categorias=&fabricante=&orderby=0&pagenumber=${pageNumber}`;
      console.log(`  Processando página: ${pageUrl}`);

      const html = await fetchData(pageUrl, headers);

      if (!html) {
        console.error(`Erro ao buscar HTML para ${pageUrl}. Pulando...`);
        break;
      }

      const $ = cheerio.load(html);
      const products = $('.item-box'); // Ajustar a classe conforme o site

      if (products.length === 0) {
        console.log(`  Nenhum produto encontrado na página ${pageNumber}. Finalizando...`);
        break;
      }

      products.each((_, element) => {
        try {
          const tituloElement = $(element).find('h2.product-title');
          const produtoNome = tituloElement.text().trim() || 'Nome não encontrado';

          const dummyLinkElement = $(element).find('a.dummy-link');
          const produtoLink = dummyLinkElement.attr('href')
            ? new URL(dummyLinkElement.attr('href'), baseUrl).href
            : 'Link não encontrado';

          const precoElement = $(element).find('span[class*="price actual-price"]');
          const preco = precoElement.text().trim() || 'Preço não encontrado';

          const esgotadoElement = $(element).find('span[class*="price sold-off actual-price"]');
          const disponibilidade = esgotadoElement.length > 0 ? 'Produto Esgotado' : 'Disponível';

          const parcelamentoElement = $(element).find('.parcelamento');
          const parcelamento = parcelamentoElement.text().trim() || 'Parcelamento não encontrado';

          productsData.push({
            'URL Base': baseUrl,
            Categoria,
            Subcategoria,
            'Sub-Subcategoria': SubSubcategoria,
            Página: pageNumber,
            Produto: produtoNome,
            Link: produtoLink,
            Preço: preco,
            Parcelamento: parcelamento,
            Disponibilidade: disponibilidade,
          });
        } catch (err) {
          console.error(`Erro ao processar produto na página ${pageNumber}:`, err.message);
        }
      });
    }
  }

  const outputPath = path.resolve(__dirname, 'produtos_extraidos_com_categorias_fev.csv');
  saveToCSV(productsData, outputPath);
};

// Função para salvar os dados em CSV
const saveToCSV = (data, filePath) => {
  if (data.length === 0) {
    console.error("Nenhum dado para salvar.");
    return;
  }

  const header = Object.keys(data[0]).join(';'); // Delimitador ponto e vírgula
  const rows = data
    .map((row) =>
      Object.values(row)
        .map((value) => `"${value}"`) // Envolve valores com aspas duplas
        .join(';')
    )
    .join('\n');

  const csvContent = `${header}\n${rows}`;

  fs.writeFileSync(filePath, csvContent, 'utf8');
  console.log(`Processo concluído e dados salvos em '${filePath}'`);
};

// Executar o scraper
scrapeProducts();
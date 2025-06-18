# 🚗 Scraper MercadoCar – Produtos Automotivos

Este projeto é um **scraper avançado** desenvolvido em **Node.js** com foco na extração de produtos do site **MercadoCar**, um e-commerce brasileiro de peças e acessórios automotivos.

---

## 😤 Desafio Técnico

Este foi um dos scrapers mais desafiadores que já desenvolvi, e por boas razões:

- O site possui **estrutura de front-end confusa**, com múltiplos níveis de navegação e rotas instáveis
- O back-end expõe dados de forma desorganizada, com **múltiplos endpoints obscuros e inconsistentes**
- Foi necessário **mapear toda a arquitetura do site na unha**, tanto a árvore de categorias quanto as formas de paginação, produtos e filtros

Esse projeto exigiu paciência, engenharia reversa e técnicas específicas de scraping para simular o comportamento real do usuário, com foco em **respeitar os limites da aplicação** e **extrair dados consistentes**.

---

## 🚀 Funcionalidades

- Mapeamento completo de categorias e subcategorias do site
- Extração de dados de produtos com paginação dinâmica
- Tratamento de dados inconsistentes no front e back
- Exportação para CSV pronto para análise

---

## 📦 Dados Coletados

- `nome`: Nome do produto  
- `preço`: Preço atual  
- `disponibilidade`: Status do estoque  
- `categoria`: Caminho da categoria  
- `url`: Link direto do produto  
- `id`: ID do produto (quando disponível)  
- `imagem`: URL da imagem principal  
- Outros campos conforme disponíveis na estrutura do produto

---

## 🛠️ Tecnologias Utilizadas

- `Node.js`
- `axios` ou `node-fetch`
- `cheerio`
- `json2csv`
- `fs`

---

## 🧪 Como Usar

### 1. Clonar o repositório
```bash
git clone https://github.com/maabenako/mercadocar-scraper.git
cd mercadocar-scraper
```
### 2. Instalar dependências
```bash
npm install cheerio axios json2csv
```
### 3. Executar o script
```bash
node mercadocar_scraper.js
```
---

### 📁 Saída
Os dados serão exportados para um arquivo:

```bash
mercadocar_produtos.csv
```

---

### 👩‍💻 Autora
Desenvolvido com 💙 por Marcela Nako
🔗 [in/marcelaabe-alvim/] | 💼 [https://github.com/maabenako?tab=repositories]

---

### ⚠️ Observações

Este scraper simula navegação real, respeitando limites de requisições para evitar bloqueios.
Os dados foram coletados via requisições públicas acessadas pelo próprio navegador.
Esse projeto pode servir como base para ETL, análise de estoque, monitoramento de preços ou estudos de mercado no setor automotivo.

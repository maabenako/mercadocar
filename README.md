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

# English:

# 🚗 MercadoCar Scraper – Automotive Products

This project is an **advanced product scraper** built in **Node.js**, designed to extract data from **MercadoCar**, a Brazilian e-commerce platform for car parts and accessories.

---

## 😤 Technical Challenge

This was one of the most challenging scrapers I've ever built, and for good reasons:

- The website has a **confusing front-end structure**, with deeply nested navigation and unstable routes  
- The back-end exposes data in an **unstructured and inconsistent** manner, using multiple obscure endpoints  
- It was necessary to **manually reverse-engineer the entire architecture**, including category trees, pagination logic, filters, and product data

This project required **patience, reverse engineering**, and specialized scraping techniques to simulate real user behavior while **respecting API limitations** and ensuring consistent data extraction.

---

## 🚀 Features

- Full mapping of categories and subcategories  
- Product data extraction with dynamic pagination  
- Handling of inconsistent data across front-end and back-end  
- CSV export ready for analysis and transformation

---

## 📦 Extracted Data

Each product includes:

- `nome`: Product name  
- `preço`: Current price  
- `disponibilidade`: Stock status  
- `categoria`: Category path  
- `url`: Direct product link  
- `id`: Product ID (if available)  
- `imagem`: Main image URL  
- Additional fields as available in the product structure

---

## 🛠️ Technologies Used

- `Node.js`  
- `axios` or `node-fetch`  
- `cheerio`  
- `json2csv`  
- `fs`

---

## 🧪 How to Use

### 1. Clone the repository
```bash
git clone https://github.com/maabenako/mercadocar-scraper.git
cd mercadocar-scraper
```
### 2. Install dependencies
```bash
npm install cheerio axios json2csv
```
### 3. Run the script
```bash
node mercadocar_scraper.js
```
---

### 📁 Output
The results will be saved in a file:

```bash
mercadocar_produtos.csv
```
---
### 👩‍💻 Author
Developed with 💙 and a lot of patience by Marcela Nako
🔗 [in/marcelaabe-alvim/] | 
💼 [https://github.com/maabenako?tab=repositories]

---
⚠️ Notes
This scraper simulates human-like navigation and respects request limits to avoid blocking.
All data is collected via publicly available endpoints used by the website's front-end.
This project can serve as a foundation for ETL pipelines, inventory monitoring, pricing analysis, or automotive market research.




# 🎬 Casa dos Filmes

[![Ver Online](https://img.shields.io/badge/Acessar%20app-Casa%20dos%20Filmes-blue?style=for-the-badge)](https://casa-dos-filmes.vercel.app/)

**Casa dos Filmes** é uma aplicação web onde você pode pesquisar filmes e ver informações como sinopse, nota no IMDb, diretor, gênero e mais. Tudo de forma simples e rápida.

---

## 🔗 Acesse agora

👉 [https://casa-dos-filmes.vercel.app](https://casa-dos-filmes.vercel.app)

---

## ✨ Funcionalidades

* Pesquisa por título de filmes usando a **OMDb API**
* Exibição de cards com imagem, ano, tipo e título
* Clique no card para ver mais detalhes
* Mensagens de erro caso não haja resultados ou falha na API
* Interface responsiva

---

## 🧰 Tecnologias utilizadas

* **React**
* **CSS**
* **Fetch API (nativa)** para requisições HTTP
* **OMDb API** para dados dos filmes
* **Vercel** para deploy

---

## 🖥 Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/casa-dos-filmes.git
cd casa-dos-filmes
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto:

```bash
npm start
```

> 💡 A chave da API da OMDb já está incluída no código (`b3126bd6`), pois esse é um projeto apenas para fins de portfólio.

---

## 📂 Estrutura de arquivos

```
📁 src/
├── App.js           # Componente principal da aplicação
├── MovieCard.jsx    # Componente para exibir os detalhes do filme
├── App.css          # Estilos da aplicação
├── search.svg       # Ícone de busca
├── index.js         # Ponto de entrada
```

## Blog Simples com Bootstrap e API Node.js/Express

Este é um blog simples desenvolvido utilizando Bootstrap para o frontend e uma API construída em Node.js/Express para gerenciar as notícias. O blog permite visualizar as notícias existentes e também cadastrar novas notícias, com título e conteúdo, assim como alterar a notícia e fazer a exclusão da mesma. As notícias são armazenadas em uma lista de objetos local na API.

## 🚀 Tecnologias

- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/pt-br/)
- [Bootstrap](https://getbootstrap.com/)

##### Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em seu sistema:

Node.js (https://nodejs.org)

## ❓ Como utilizar

### Como instalar

1 - Faça o clone deste repositório para o seu ambiente local.
2 - Entre no diretório e navegue até a pasta API

```bash
cd API
```

3 - Instale as dependências do projeto

```bash
npm install
```

4 - Para startar o servidor, digite:

```bash
npm start
```

### Funcionalidades

O blog possui as seguintes funcionalidades:

🔹Visualizar todas as notícias existentes.</br>
🔹Cadastrar novas notícias, fornecendo título e conteúdo.</br>
🔹Armazenar as notícias em uma lista de objetos local na API.</br>
🔹Alterar notícias utilizando o id da mesma.</br>
🔹Excluir notícias utilizando o id.</br>

#### 🔵 API Endpoints

A API possui os seguintes endpoints e possui a documentação do insomnia na pasta da API:

GET /posts: Retorna a lista de todas as notícias cadastradas.</br>
GET /posts/:id : Retorna uma noticia específica pelo. id</br>
POST /posts: Cadastra uma nova notícia com base nos dados fornecidos no corpo da requisição.</br>
PUT /posts/:id : Altera uma notícia pelo id.</br>
DELETE /posts/:id : Deleta uma notícia.</br>

#### 🔵 Considerações finais

Este blog simples é apenas um projeto de exemplo com fins educativos, demonstrando a integração entre Bootstrap e uma API Node.js/Express para gerenciamento de notícias. Ele não possui recursos avançados de persistência de dados e foi feito apenas para fins de aprendizado.

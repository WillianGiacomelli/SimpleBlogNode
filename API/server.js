const express = require("express");
const PORT = 3333;
const cors = require("cors");

const postsRoutes = require("./routes/posts.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(postsRoutes);
app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

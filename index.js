const express = require("express");
const app = express();
const importData = require("./data.json");
const importDiscipinas = require('./disciplinas.json')
const { getById, getNotaByName } = require("./controller")
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/aulas", (req, res) => {
  res.send(importData);
});

app.get("/aula/:id", getById);

app.get("/disciplinas", (req, res) => {
  res.send(importDiscipinas);
});

app.get("/disciplina/:id", getNotaByName);


app.listen(port, () => {
  console.log(`Example app is listening on port http://localhost:${port}`);
});
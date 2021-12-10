const express = require('express');

const PORT = process.env.PORT || 3000;
// const SERVER_ENV = process.env.SERVER_ENV || 'Erro: Não conseguiu setar o nome da variável ambiente';

const app = express();

app.get('/', (_req, res) => {
  res.send(`Está vivo!!!`);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

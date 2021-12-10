const express = require('express');

const app = express();

app.get('health', (req, res, next) => {
  res.status(200).send({ message: "Api is online" });
})

app.listen(3000, () => console.log('Running on port 3000'));
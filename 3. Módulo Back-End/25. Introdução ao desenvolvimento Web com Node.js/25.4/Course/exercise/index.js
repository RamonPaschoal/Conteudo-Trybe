const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs/promises')
const rescue = require('express-rescue');

const app = express();

app.use(bodyParser.json());


// Requisito 1:
app.get('/ping', (req, res) => {
  res.send({
    message: 'pong'
  })
});

// Requisito 2:
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.json({
    message: `Hello, ${name}`
  });
});

// Requisito 3:
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  
  if(parseInt(age) <= 17) {
    return res.status(401).json({
      message: `Unauthorized`
    })
  }
  res.status(200).json({
    message: `Hello, ${name}!`
  });
});

// Requisito 4:
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.json({
    message: `Seu nome é ${name} e você tem ${age} anos de idade`
  })
})

// Requisito 5:
function getSimpsons () {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent));
}

function setSimpsons (newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

// Requisito 6:
app.get('/simpsons', async (req, res) => {
  const data = await getSimpsons();

  return res.status(200).send(data)
})

// Requisito 7:
app.get('/simpsons/:id', rescue(async (req, res) => {
  const data = await getSimpsons();

  const simpson = data.find(({ id }) => id === req.params.id);

  if(!simpson) {
    return res.status(404).json({ message: 'simpson not found' });
  }

  return res.status(202).json(simpson);
}));

// Requisito 8:
app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;
  const data = await getSimpsons();

  if(data.map(({ id }) => id.includes(id))) {
    return res.status(409).json({ message: 'id already exists' })
  }

  data.push({ id, name });

  await setSimpsons(data);

  res.status(204).end();
}))

app.listen(3001, () => console.log("App rodando na porta 3001"));
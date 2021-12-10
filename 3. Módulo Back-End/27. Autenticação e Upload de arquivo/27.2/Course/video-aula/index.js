const express = require('express');
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null,'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
})

const upload = multer({ storage })

const PORT = 3000;

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.post('/upload', upload.single('arquivo'), (req, res) => {
  console.log(req.file)
  res.send('Ok')
})


app.listen(PORT, () => console.log(`Running in ${PORT}`));

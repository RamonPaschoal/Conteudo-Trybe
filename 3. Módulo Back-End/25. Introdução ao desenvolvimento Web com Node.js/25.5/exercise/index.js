const express = require('express');
const cors = require('cors');
const userRouter = require('./src/routers/userRouter');
const logger = require('./src/middlewares/logMiddleware');
const timer = require('./src/middlewares/timeTracker');
const error = require('./src/middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

app.get('/health', (req, res) => {
  res.status(200).send('Server ok')
})

app.use('/user', userRouter);

app.use(error);
app.use(timer);

app.listen(3001, () => console.log("Rodando na porta 3000"));

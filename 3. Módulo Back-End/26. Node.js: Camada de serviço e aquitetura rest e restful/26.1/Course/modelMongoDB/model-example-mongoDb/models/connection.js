const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://127.0.0.1:27017';
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
let db = null;

const connection = () => {
  return db
  ? Promise.resolve(db)
  : MongoClient.connect(MONGO_URL, OPTIONS)
  .then((conn) => {
  db = conn.db('model_example');
  return db;
  })
};

module.exports = connection;
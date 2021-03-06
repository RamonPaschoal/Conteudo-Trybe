const model = require('../../model/artist/index')

module.exports = async (req, res, next) => {
  try {
    const { name, genres } = req.body;

    if(!name || !genres) {
      return res.status(400).send({ message: 'must inform name and genres' })
    }

    const newArtist = { name, genres }
    await model.create(newArtist);

    return res.status(201).send(newArtist)
  } catch (err) {
    next(err)
  }
};
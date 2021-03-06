const model = require('../../model/artist/index')

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const found = model.findById(id);

    if(!found) {
      return res.status(404).end();
    }

    await model.remove(id);

    return res.status(204).end()
  } catch (err) {
    next(err)
  }
}
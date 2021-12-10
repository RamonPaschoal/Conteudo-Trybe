const { ObjectId } = require('mongodb');
const connection = require('../connection');


module.exports = async (song) => {
  const { _id, ...songWithoutId } = song;

  await (await connection()).collection('song').updateOne(
    {
      _id: _id
    },
    {
      $set: songWithoutId,
    }
  )

  return song;
}
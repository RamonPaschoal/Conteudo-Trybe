const Song = require('../../model/song/index');
const Artist = require('../../model/artist')

module.exports = async (song) => {
  const foundArtist = Artist.findById(song.artistId);
  if(!foundArtist) return null;

  return Song.create()
}
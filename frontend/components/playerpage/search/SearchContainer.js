import { connect } from 'react-redux';
import Search from './Search';
import { searchSongs, playSong } from '../../../actions/song_actions';
import { searchAlbums } from '../../../actions/album_actions';
import { searchArtists } from '../../../actions/artist_actions';
import { searchPlaylists } from '../../../actions/playlist_actions';

const entitySelector = (entity, object, query) => {
  let map = {
    song: 'title',
    album: 'title',
    artist: 'name',
    playlist: 'title'
  }
  let column = map[entity];

  return Object.values(object)
    .filter(object => object[column].toLowerCase().includes(query))
}



const mstp = (state, {match: {params: {searchTerm}}}) => {

  if (searchTerm) {
    return {
      songs: entitySelector('song', state.entities.songs, searchTerm.toLowerCase()),
      albums: entitySelector('album', state.entities.albums, searchTerm.toLowerCase()),
      artists: entitySelector('artist', state.entities.artists, searchTerm.toLowerCase()),
      playlists: entitySelector('playlist', state.entities.playlists, searchTerm.toLowerCase())
    }
  } else {
    return {
      songs: [],
      albums: [],
      artists: [],
      playlists: []
    }
  }
  
}

const mdtp = dispatch => ({
  searchSongs: query => dispatch(searchSongs(query)),
  searchAlbums: query => dispatch(searchAlbums(query)),
  searchArtists: query => dispatch(searchArtists(query)),
  searchPlaylists: query => dispatch(searchPlaylists(query)),
  playSong: (song) => dispatch(playSong(song))

})

export default connect(mstp, mdtp)(Search);
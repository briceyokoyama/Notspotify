import { connect } from 'react-redux';
import Search from './Search';
import { searchSongs } from '../../../actions/song_actions';
import { searchAlbums } from '../../../actions/album_actions';

const entitySelector = (entity, query) => {
  return Object.values(entity)
    .filter(entity => entity.title.toLowerCase().includes(query))
}



const mstp = (state, {match: {params: {searchTerm}}}) => {

  if (searchTerm) {
    return {
      songs: entitySelector(state.entities.songs, searchTerm.toLowerCase()),
      albums: entitySelector(state.entities.albums, searchTerm.toLowerCase())
    }
  } else {
    return {
      songs: [],
      albums: []
    }
  }
  
}

const mdtp = dispatch => ({
  searchSongs: query => dispatch(searchSongs(query)),
  searchAlbums: query => dispatch(searchAlbums(query))
})

export default connect(mstp, mdtp)(Search);
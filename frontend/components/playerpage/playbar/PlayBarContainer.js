import { connect } from 'react-redux';
import PlayBar from './PlayBar';
import { pauseSong, nextSong, resumeSong } from '../../../actions/song_actions';
import { fetchAlbums } from '../../../actions/album_actions';

const getCurrentAlbum = (songs, currentSongId, albums) => {
  debugger;
  if ((currentSongId === parseInt(currentSongId)) && (Object.keys(albums).length > 0)) {
    return albums[songs[currentSongId].albumId]
  } else {
    return null;
  }
}

const mstp = (state, ownProps) => ({
  currentSong: state.entities.songs[state.ui.currentSong],
  isPlaying: state.ui.isPlaying,
  currentAlbum: getCurrentAlbum(state.entities.songs, state.ui.currentSong, state.entities.albums)
})

const mdtp = dispatch => ({
  pauseSong: () => dispatch(pauseSong()),
  nextSong: () => dispatch(nextSong()),
  resumeSong: () => dispatch(resumeSong()),
  getAlbums: () => dispatch(fetchAlbums())
})

export default connect(mstp, mdtp)(PlayBar);
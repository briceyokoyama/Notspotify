import { connect } from 'react-redux';
import PlayBar from './PlayBar';
import { pauseSong, nextSong, resumeSong, toggleRandom, toggleLooping } from '../../../actions/song_actions';
import { fetchAlbums } from '../../../actions/album_actions';

const getCurrentAlbum = (songs, currentSongId, albums) => {
  if ((currentSongId === parseInt(currentSongId)) && (Object.keys(albums).length > 0)) {
    return albums[songs[currentSongId].albumId]
  } else {
    return null;
  }
}

const mstp = (state, ownProps) => ({
  currentSong: state.entities.songs[state.ui.currentSong],
  isPlaying: state.ui.isPlaying,
  currentAlbum: getCurrentAlbum(state.entities.songs, state.ui.currentSong, state.entities.albums),
  currentIndex: state.ui.index,
  currentPlaylist: state.ui.songs,
  playbar: state.ui.playbarControls
})

const mdtp = dispatch => ({
  pauseSong: () => dispatch(pauseSong()),
  nextSong: (payload) => dispatch(nextSong(payload)),
  resumeSong: (payload) => dispatch(resumeSong(payload)),
  getAlbums: () => dispatch(fetchAlbums()),
  toggleRandom: (isRandom) => dispatch(toggleRandom(isRandom)),
  toggleLooping: (isLooping) => dispatch(toggleLooping(isLooping))
})

export default connect(mstp, mdtp)(PlayBar);
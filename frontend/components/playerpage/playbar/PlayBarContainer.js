import { connect } from 'react-redux';
import PlayBar from './PlayBar';
import { previousSong, pauseSong, nextSong, resumeSong, toggleRandom, toggleLooping, setVolume } from '../../../actions/song_actions';
import { fetchAlbums } from '../../../actions/album_actions';

const getCurrentAlbum = (songs, currentSongId, albums) => {
  if ((currentSongId === parseInt(currentSongId)) && (Object.keys(albums).length > 0)) {
    return albums[songs[currentSongId].albumId]
  } else {
    return null;
  }
}

const mstp = (state, ownProps) => ({
  currentSong: state.entities.songs[state.ui.currentSong.id],
  isPlaying: state.ui.isPlaying,
  currentAlbum: getCurrentAlbum(state.entities.songs, state.ui.currentSong.id, state.entities.albums),
  currentIndex: state.ui.index,
  currentPlaylist: state.ui.songs,
  playbar: state.ui.playbarControls,
  playedIndices: state.ui.playedIndices,
  volume: state.ui.volume
})

const mdtp = dispatch => ({
  prevSong: (payload) => dispatch(previousSong(payload)),
  pauseSong: () => dispatch(pauseSong()),
  nextSong: (payload) => dispatch(nextSong(payload)),
  resumeSong: (payload) => dispatch(resumeSong(payload)),
  getAlbums: () => dispatch(fetchAlbums()),
  toggleRandom: (isRandom) => dispatch(toggleRandom(isRandom)),
  toggleLooping: (isLooping) => dispatch(toggleLooping(isLooping)),
  setVolume: (volume) => dispatch(setVolume(volume))
})

export default connect(mstp, mdtp)(PlayBar);
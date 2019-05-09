import { connect } from 'react-redux';
import PlayBar from './PlayBar';
import { pauseSong, nextSong, resumeSong } from '../../../actions/song_actions';

const getCurrentSong = (songs, currentSongId) => {

}

const mstp = (state, ownProps) => ({
  currentSong: state.entities.songs[state.ui.currentSong],
  isPlaying: state.ui.isPlaying
  // ADD CURRENT ALBUM FOR ART HERE
})

const mdtp = dispatch => ({
  pauseSong: () => dispatch(pauseSong()),
  nextSong: () => dispatch(nextSong()),
  resumeSong: () => dispatch(resumeSong())
})

export default connect(mstp, mdtp)(PlayBar);
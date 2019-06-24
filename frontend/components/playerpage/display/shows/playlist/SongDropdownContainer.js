import { connect } from 'react-redux';
import SongDropdown from './SongDropdown';
import { addSong, removeSongFromPlaylist } from '../../../../../actions/playlist_songs_actions';

const mstp = (state, ownProps) => ({
  playlist: Object.values(state.ui.playlist)[0],
  userId: state.session.id
})

const mdtp = (dispatch) => ({
  addSong: (id) => dispatch(addSong(id)),
  removeSongFromPlaylist: (psId) => dispatch(removeSongFromPlaylist(psId))
})

export default connect(mstp, mdtp)(SongDropdown);
import { connect } from 'react-redux';
import PlayerNavBar from './PlayerNavBar';
import { logout } from '../../../actions/session_actions';
import { withRouter } from 'react-router';
import { closeModal } from '../../../actions/song_actions';
import { searchPlaylistsByUserId } from '../../../actions/playlist_actions';
import { addSongToPlaylist } from '../../../actions/playlist_songs_actions';

const playlistSelector = (playlists, userId) => {
  return Object.values(playlists).filter(playlist => playlist.userId === userId)
}

const mstp = (state, ownProps) => ({
  addSong: state.ui.addSong,
  userId: state.session.id,
  playlists: playlistSelector(state.entities.playlists, state.session.id)
})

const mdtp = dispatch => ({
  logout: () => dispatch(logout()),
  closeModal: () => dispatch(closeModal()),
  searchPlaylists: (userId) => dispatch(searchPlaylistsByUserId(userId)),
  addSongToPlaylist: (payload) => dispatch(addSongToPlaylist(payload))
})

export default withRouter(connect(mstp, mdtp)(PlayerNavBar));
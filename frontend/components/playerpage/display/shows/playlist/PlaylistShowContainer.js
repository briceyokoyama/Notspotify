import { connect } from 'react-redux';
import PlaylistShow from './PlaylistShow';
import { fetchPlaylist } from '../../../../../actions/playlist_actions';
import { fetchSongs } from '../../../../../actions/song_actions';

const mstp = (state, ownProps) => ({
  playlistId: ownProps.match.params.id
})

const mdtp = dispatch => ({
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  fetchSongs: (playlist_id) => dispatch(fetchSongs(playlist_id))
})

export default connect(mstp, mdtp)(PlaylistShow);
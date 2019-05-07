import { connect } from 'react-redux';
import PlaylistIndex from './PlaylistIndex';
import { fetchPlaylists, makePlaylist } from '../../../../../actions/playlist_actions';

const playlistSelector = (playlists) => {
  return Object.keys(playlists).map(id => playlists[id])
}

const mstp = ({entities: {playlists}, session: {id}}, ownProps) => ({
  currentUserId: id,
  playlists: playlistSelector(playlists),
  scenario: ownProps.match.params.main
})

const mdtp = dispatch => ({
  fetchPlaylists: (user_id) => dispatch(fetchPlaylists(user_id)),
  makePlaylist: playlist => dispatch(makePlaylist(playlist))
})

export default connect(mstp, mdtp)(PlaylistIndex);
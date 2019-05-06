import { connect } from 'react-redux';
import PlaylistIndex from './PlaylistIndex';
import { fetchPlaylists } from '../../../../../actions/playlist_actions';

const playlistSelector = (playlists) => {
  return Object.keys(playlists).map(id => playlists[id])
}

const mstp = ({entities: {playlists}, session: {id}}, ownProps) => ({
  currentUserId: id,
  playlists: playlistSelector(playlists),
  scenario: ownProps.match.params[0]
})

const mdtp = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists())
})

export default connect(mstp, mdtp)(PlaylistIndex);
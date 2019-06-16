import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaylistIndex from './PlaylistIndex';
import { fetchPlaylists, makePlaylist } from '../../../../../actions/playlist_actions';
import { fetchPlaylistFollowers } from '../../../../../actions/playlist_follower_actions'

const playlistSelector = (playlists, scenario, user_id, playlistFollowers) => {
  if (scenario === 'library') {
    return Object.values(playlistFollowers)
      .filter(follow => follow.userId === user_id)
      .map(follow => playlists[follow.playlistId])
  } else {
    return Object.keys(playlists).map(id => playlists[id])
  }
}

const mstp = ({entities: {playlists, playlistFollowers}, session: {id}}, ownProps) => ({
  currentUserId: id,
  playlists: playlistSelector(playlists, ownProps.match.params.main || library, id, playlistFollowers),
  scenario: (ownProps.adding === true) ? 'library' : ownProps.match.params.main
})

const mdtp = dispatch => ({
  fetchPlaylists: (user_id) => dispatch(fetchPlaylists(user_id)),
  makePlaylist: playlist => dispatch(makePlaylist(playlist)),
  fetchPlaylistFollowers: () => dispatch(fetchPlaylistFollowers())
})

export default connect(mstp, mdtp)(PlaylistIndex);
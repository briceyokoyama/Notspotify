import { connect } from 'react-redux';
import PlaylistIndex from './PlaylistIndex';
import { fetchPlaylists, makePlaylist } from '../../../../../actions/playlist_actions';
import { fetchPlaylistFollowers } from '../../../../../actions/playlist_follower_actions'

const playlistSelector = (playlists, scenario, user_id, playlistFollowers) => {
  if (scenario === 'library') {
    debugger;
    return Object.values(playlistFollowers)
      .filter(follow => follow.userId === user_id)
      .map(follow => playlists[follow.playlistId])

    
    // return Object.keys(playlists).map(id => {
    //   return playlists[id].userId === user_id ? playlists[id] : false
    // }).filter(ele => ele !== false)
  } else {
    return Object.keys(playlists).map(id => playlists[id])
  }
  
  //filter here based on current user??
  //object.values
  //filter where userID == current_userId
  //update reducer to merge rather than overwrite
  //react audio player
  //ui songs slice of state
  //current song slice of state
  //current song next song
  //update ui with array of playlist songs
  //event listener from the react audio player for telling when song is over(?) OnEnded{Function}

}

const mstp = ({entities: {playlists, playlistFollowers}, session: {id}}, ownProps) => ({
  currentUserId: id,
  playlists: playlistSelector(playlists, ownProps.match.params.main, id, playlistFollowers),
  scenario: ownProps.match.params.main
})

const mdtp = dispatch => ({
  fetchPlaylists: (user_id) => dispatch(fetchPlaylists(user_id)),
  makePlaylist: playlist => dispatch(makePlaylist(playlist)),
  fetchPlaylistFollowers: () => dispatch(fetchPlaylistFollowers())
})

export default connect(mstp, mdtp)(PlaylistIndex);
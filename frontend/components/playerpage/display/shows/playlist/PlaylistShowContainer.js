import { connect } from 'react-redux';
import PlaylistShow from './PlaylistShow';
import { fetchPlaylist } from '../../../../../actions/playlist_actions';
import { fetchSongs } from '../../../../../actions/song_actions';

// const songsSelector = (songs) => {
//   return Object.keys(songs).map(id => {
//     return songs[id]
//   })
// }

const playlistSelector = (playlist) => {
  // debugger;
  return (
  Object.keys(playlist).map(id => playlist[id])
)}

const mstp = (state, ownProps) => ({
  playlistId: ownProps.match.params.id,
  songs: songsSelector(state.ui.playlist.id),
  playlist: playlistSelector(state.ui.playlist)
})

const mdtp = dispatch => ({
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  fetchSongs: (playlist_id) => dispatch(fetchSongs(playlist_id))
})

export default connect(mstp, mdtp)(PlaylistShow);
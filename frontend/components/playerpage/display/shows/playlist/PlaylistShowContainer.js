import { connect } from 'react-redux';
import PlaylistShow from './PlaylistShow';
import { fetchPlaylist } from '../../../../../actions/playlist_actions';
import { playSong, fetchAllSongs, stopSong } from '../../../../../actions/song_actions';
import { fetchPlaylistSongs } from '../../../../../actions/playlist_songs_actions';

const songsSelector = (playlistSongs, songs, playlist_id) => {
  let arr = Object.keys(playlistSongs).map(id => {
    if (playlistSongs[id].playlistId === parseInt(Object.keys(playlist_id)[0])) {
      return songs[playlistSongs[id].songId]
    } else { 
      return false }
  }).filter(ele => ele !== false)
  return arr;
}

const playlistSelector = (playlist) => {
  return (
  Object.keys(playlist).map(id => playlist[id])
)}

const mstp = (state, ownProps) => ({
  playlistId: ownProps.match.params.id,
  songs: songsSelector(state.entities.playlistSongs, state.entities.songs, state.ui.playlist),
  playlist: playlistSelector(state.ui.playlist),
  loading: state.ui.loading.playlistLoading
})

const mdtp = dispatch => ({
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  fetchAllSongs: () => dispatch(fetchAllSongs()),
  fetchPlaylistSongs: () => dispatch(fetchPlaylistSongs()),
  playSong: (song) => dispatch(playSong(song)),
})

export default connect(mstp, mdtp)(PlaylistShow);
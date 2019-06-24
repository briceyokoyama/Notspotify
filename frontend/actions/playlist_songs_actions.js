import * as APIUtil from '../util/playlistSong_api_util';

export const RECEIVE_PLAYLIST_SONG = "RECEIVE_PLAYLIST_SONG";
export const REMOVE_PLAYLIST_SONG = "REMOVE_PLAYLIST_SONG";
export const ADD_SONG = "ADD_SONG";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const addSong = (id) => {
  return ({
    type: ADD_SONG,
    show: true,
    id
  })
}

export const closeModal = () => {
  return ({
    type: CLOSE_MODAL
  })
}

export const receivePlaylistSong = (playlistSong) => ({
  type: RECEIVE_PLAYLIST_SONG,
  playlistSong
})

export const removePlaylistSong = (playlistSong) => ({
  type: REMOVE_PLAYLIST_SONG,
  psId: Object.keys(playlistSong)[0]
})

export const addSongToPlaylist = (payload) => dispatch => (
  APIUtil.addToPlaylist(payload)
    .then(playlistSong => dispatch(receivePlaylistSong(playlistSong)))
)

export const removeSongFromPlaylist = (psId) => dispatch => (
  APIUtil.removeFromPlaylist(psId)
    .then(playlistSong => dispatch(removePlaylistSong(playlistSong)))
)
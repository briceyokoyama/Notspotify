import * as APIUtil from '../util/playlistSong_api_util';

export const RECEIVE_PLAYLIST_SONG = "RECEIVE_PLAYLIST_SONG"

export const receivePlaylistSong = (playlistSong) => ({
  type: RECEIVE_PLAYLIST_SONG,
  playlistSong
})

export const addSongToPlaylist = (payload) => dispatch => (
  APIUtil.addToPlaylist(payload)
    .then(playlistSong => dispatch(receivePlaylistSong(playlistSong)))
)
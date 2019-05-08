import * as APIUtil from '../util/playlistSong_api_util';

export const RECEIVE_PLAYLIST_SONGS = "RECEIVE_PLAYLIST_SONGS";

const receivePlaylistSongs = (playlistSongs) => ({
  type: RECEIVE_PLAYLIST_SONGS,
  playlistSongs
})

export const fetchPlaylistSongs = () => dispatch => (
  APIUtil.recivePlaylistSongs()
    .then(playlistSongs => dispatch(receivePlaylistSongs(playlistSongs)))
)
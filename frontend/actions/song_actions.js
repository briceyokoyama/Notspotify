import * as APIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS"

const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs
})

const receiveAllSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
})

export const fetchSongs = (playlistId) => dispatch => (
  APIUtil.fetchSongs(playlistId)
    .then(songs => dispatch(receiveSongs(songs)))
);

export const fetchAllSongs = () => dispatch => (
  APIUtil.fetchSongs()
    .then(songs => dispatch(receiveAllSongs(songs)))
);
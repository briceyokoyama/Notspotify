import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const CREATE_PLAYLIST = "CREATE_PLAYLIST";

const receivePlaylists = (payload) => ({
  type: RECEIVE_PLAYLISTS,
  payload
});

const receivePlaylist = (payload) => ({
  type: RECEIVE_PLAYLIST,
  payload
})

export const fetchPlaylists = (user_id) => dispatch => (
  APIUtil.fetchPlaylists(user_id)
    .then(playlists => dispatch(receivePlaylists(playlists)))
);

export const fetchPlaylist = (id) => dispatch => (
  APIUtil.fetchPlaylist(id)
    .then(playlist => dispatch(receivePlaylist(playlist)))
);

export const makePlaylist = (playlist) => dispatch => (
  APIUtil.createPlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)))
);
import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const CREATE_PLAYLIST = "CREATE_PLAYLIST";
export const LOAD_PLAYLIST = "LOAD_PLAYLIST";

const receivePlaylists = (payload) => ({
  type: RECEIVE_PLAYLISTS,
  payload
});

const receivePlaylist = (payload) => ({
  type: RECEIVE_PLAYLIST,
  payload
})

const loadPlaylist = () => ({
  type: LOAD_PLAYLIST
})

export const fetchPlaylists = (user_id) => dispatch => (
  APIUtil.fetchPlaylists(user_id)
    .then(playlists => dispatch(receivePlaylists(playlists)))
);

export const fetchPlaylist = (id) => dispatch => {
  dispatch(loadPlaylist());
  return APIUtil.fetchPlaylist(id)
    .then(playlist => dispatch(receivePlaylist(playlist)))
};

export const searchPlaylists = (query) => dispatch => (
  APIUtil.searchPlaylists(query)
    .then(playlists => dispatch(receivePlaylists(playlists)))
);

export const searchPlaylistsByUserId = (userId) => dispatch => (
  APIUtil.searchPlaylistsByUserId(userId)
    .then(playlists => dispatch(receivePlaylists(playlists)))
);

export const makePlaylist = (playlist) => dispatch => (
  APIUtil.createPlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)))
);
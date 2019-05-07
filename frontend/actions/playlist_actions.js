import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const CREATE_PLAYLIST = "CREATE_PLAYLIST";

const receivePlaylists = (playlists) => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

const createPlaylist = (playlist) => ({
  type: CREATE_PLAYLIST,
  playlist
})

export const fetchPlaylists = () => dispatch => (
  APIUtil.fetchPlaylists()
    .then(playlists => dispatch(receivePlaylists(playlists)))
);

export const makePlaylist = (playlist) => dispatch => (
  APIUtil.createPlaylist(playlist)
    .then(playlist => dispatch(createPlaylist(playlist)))
)
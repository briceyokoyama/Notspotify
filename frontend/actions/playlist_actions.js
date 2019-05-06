import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";

const receivePlaylists = (playlists) => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const fetchPlaylists = () => dispatch => (
  APIUtil.fetchPlaylists()
    .then(playlists => dispatch(receivePlaylists(playlists)))
);
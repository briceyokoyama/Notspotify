import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST } from '../actions/playlist_actions';

const playlistsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, action.payload.playlist);
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, action.payload.playlists);
    default:
      return state;
  }
}

export default playlistsReducer;
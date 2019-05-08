import { RECEIVE_PLAYLISTS, CREATE_PLAYLIST } from '../actions/playlist_actions';

const playlistsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, action.playlists);
    case CREATE_PLAYLIST:
      newState = Object.assign({}, state, action.playlist)
      return newState;
    default:
      return state;
  }
}

export default playlistsReducer;
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';

const filterPlaylistReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, action.playlist)
    default:
      return state;
  }
};

export default filterPlaylistReducer;
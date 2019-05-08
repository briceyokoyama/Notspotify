import { RECEIVE_ALL_SONGS } from '../actions/song_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';

const songsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLIST:
    return Object.assign({}, state, action.payload.songs);
    case RECEIVE_ALL_SONGS:
      return Object.assign({}, state, action.songs);
    default:
      return state;
  }
}

export default songsReducer;
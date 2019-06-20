import { RECEIVE_ALL_SONGS, RECEIVE_SONGS } from '../actions/song_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';

const songsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLIST:
    return Object.assign({}, state, action.payload.songs);
    case RECEIVE_ALL_SONGS:
      return Object.assign({}, state, action.songs);
    case RECEIVE_SONGS:
      return Object.assign({}, state, action.songs);
    case RECEIVE_ALBUM:
      return Object.assign({}, state, action.payload.songs)
    default:
      return state;
  }
}

export default songsReducer;
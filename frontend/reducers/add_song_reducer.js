import { ADD_SONG, CLOSE_MODAL } from '../actions/song_actions';
import { RECEIVE_PLAYLIST_SONG } from '../actions/playlist_songs_actions';

const addSongReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_SONG:
      return action;
    case CLOSE_MODAL:
      return {};
    case RECEIVE_PLAYLIST_SONG:
      return {};
    default:
      return state;
  }
};

export default addSongReducer;
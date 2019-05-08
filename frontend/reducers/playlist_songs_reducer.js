import { RECEIVE_PLAYLIST_SONGS } from '../actions/playlist_songs_actions';

const playlistSongsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLIST_SONGS:
      return action.playlistSongs;
    default:
      return state;
  }
};

export default playlistSongsReducer;
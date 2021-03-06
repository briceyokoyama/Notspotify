import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_PLAYLIST_SONG, REMOVE_PLAYLIST_SONG } from '../actions/playlist_songs_actions';

const playlistSongsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLIST_SONG:
      return Object.assign({}, state, action.playlistSong);
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, action.payload.playlistSongs);
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, action.payload.playlistSongs);
    case REMOVE_PLAYLIST_SONG:
      let newState = Object.assign({}, state)
      delete newState[action.psId]
      return newState;
    default:
      return state;
  }
};

export default playlistSongsReducer;
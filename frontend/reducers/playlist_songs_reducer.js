import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST } from '../actions/playlist_actions';

const playlistSongsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, action.payload.playlistSongs);
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, action.payload.playlistSongs);
    default:
      return state;
  }
};

export default playlistSongsReducer;
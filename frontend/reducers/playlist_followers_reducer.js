import { RECEIVE_PLAYLISTS } from '../actions/playlist_actions';

const playlistFollowersReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, action.payload.playlistFollowers);
    default:
      return state;
  }
};

export default playlistFollowersReducer;
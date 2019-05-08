import { RECEIVE_PLAYLIST_FOLLOWERS } from '../actions/playlist_follower_actions';

const playlistFollowersReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLIST_FOLLOWERS:
      return action.followers;
    default:
      return state;
  }
};

export default playlistFollowersReducer;
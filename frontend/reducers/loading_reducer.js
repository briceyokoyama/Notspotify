import { LOAD_PLAYLIST, RECEIVE_PLAYLIST } from '../actions/playlist_actions';

const loadingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, {playlistLoading: false})
    case LOAD_PLAYLIST:
      return Object.assign({}, state, {playlistLoading: true})
    default:
      return state
  }
}

export default loadingReducer;
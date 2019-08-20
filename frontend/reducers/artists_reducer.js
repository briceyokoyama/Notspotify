import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ARTISTS:
      return Object.assign({}, state, action.artists);
    case RECEIVE_ARTIST:
      console.log("artist here", action.payload.artist)
      return Object.assign({}, state, action.payload.artist)
    default:
      return state;
  }
}

export default artistsReducer;
import { RECEIVE_ALBUMS } from '../actions/album_actions';

const albumsReduer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return Object.assign({}, state, action.albums);
    default:
      return state;
  }
}

export default albumsReduer;
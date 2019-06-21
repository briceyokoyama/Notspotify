import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';

const albumsReduer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return Object.assign({}, state, action.albums);
    case RECEIVE_ALBUM:
      return Object.assign({}, state, action.payload.album)
    default:
      return state;
  }
}

export default albumsReduer;
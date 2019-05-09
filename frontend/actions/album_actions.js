import * as APIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";

const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums
})

export const fetchAlbums = () => dispatch => (
  APIUtil.fetchAlbums()
    .then(albums => dispatch(receiveAlbums(albums)))
)
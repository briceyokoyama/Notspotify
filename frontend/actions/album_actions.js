import * as APIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums
})

const receiveAlbum = (payload) => ({
  type: RECEIVE_ALBUM,
  payload
})

export const fetchAlbums = () => dispatch => (
  APIUtil.fetchAlbums()
    .then(albums => dispatch(receiveAlbums(albums)))
)

export const fetchAlbum = (id) => dispatch => (
  APIUtil.fetchAlbum(id)
    .then(payload => dispatch(receiveAlbum(payload)))
)

export const searchAlbums = (query) => dispatch => (
  APIUtil.searchAlbums(query)
    .then(albums => dispatch(receiveAlbums(albums)))
);
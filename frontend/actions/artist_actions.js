import * as APIUtil from '../util/artist_api_util';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

const receiveArtists = (artists) => ({
  type: RECEIVE_ARTISTS,
  artists
})

const receiveArtist = (payload) => ({
  type: RECEIVE_ARTIST,
  payload
})

export const searchArtists = (query) => dispatch => (
  APIUtil.searchArtists(query)
    .then(artists => dispatch(receiveArtists(artists)))
);

export const fetchArtists = () => dispatch => (
  APIUtil.fetchArtists()
    .then(artists => dispatch(receiveArtists(artists)))
)

export const fetchArtist = (id) => dispatch => (
  APIUtil.fetchArtist(id)
    .then(payload => dispatch(receiveArtist(payload)))
)
import * as APIUtil from '../util/artist_api_util';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";

const receiveArtists = (artists) => ({
  type: RECEIVE_ARTISTS,
  artists
})

export const searchArtists = (query) => dispatch => (
  APIUtil.searchArtists(query)
    .then(artists => dispatch(receiveArtists(artists)))
);

export const fetchArtists = () => dispatch => (
  APIUtil.fetchArtists()
    .then(artists => dispatch(receiveArtists(artists)))
)
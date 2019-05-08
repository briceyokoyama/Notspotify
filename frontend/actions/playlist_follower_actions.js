import * as APIUtil from '../util/playlistFollower_api_util';

export const RECEIVE_PLAYLIST_FOLLOWERS = "RECEIVE_PLAYLIST_FOLLOWERS";

const receivePlaylistFollowers = (followers) => ({
  type: RECEIVE_PLAYLIST_FOLLOWERS,
  followers
})

export const fetchPlaylistFollowers = () => dispatch => (
  APIUtil.recivePlaylistFollowers()
    .then(followers => (
      dispatch(receivePlaylistFollowers(followers))
    )
  )
)
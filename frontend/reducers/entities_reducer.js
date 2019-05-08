import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import playlistsReducer from './playlists_reducer';
import songsReducer from './songs_reducer';
import playlistFollowersReducer from './playlist_followers_reducer';
import playlistSongsReducer from './playlist_songs_reducer';

export default combineReducers({
  users: usersReducer,
  playlists: playlistsReducer,
  songs: songsReducer,
  playlistSongs: playlistSongsReducer,
  playlistFollowers: playlistFollowersReducer
})
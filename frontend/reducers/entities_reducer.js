import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import playlistsReducer from './playlists_reducer';

export default combineReducers({
  users: usersReducer,
  playlists: playlistsReducer
})
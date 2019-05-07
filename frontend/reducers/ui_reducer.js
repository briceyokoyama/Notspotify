import { combineReducers } from 'redux';
import filterPlaylistReducer from './filter_playlist_reducer';

export default combineReducers({
  playlist: filterPlaylistReducer
})
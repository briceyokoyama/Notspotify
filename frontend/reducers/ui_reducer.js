import { combineReducers } from 'redux';
import filterPlaylistReducer from './filter_playlist_reducer';
import filterSongReducer from './filter_song_reducer';
import loadingReducer from './loading_reducer';

export default combineReducers({
  playlist: filterPlaylistReducer,
  songs: filterSongReducer,
  loading: loadingReducer
})
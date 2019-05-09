import { combineReducers } from 'redux';
import filterPlaylistReducer from './filter_playlist_reducer';
import filterSongReducer from './filter_song_reducer';
import loadingReducer from './loading_reducer';
import currentSongReducer from './current_song_reducer';
import isPlayingReducer from './is_playing_reducer';
import indexReducer from './index_reducer';


export default combineReducers({
  playlist: filterPlaylistReducer,
  songs: filterSongReducer,
  loading: loadingReducer,
  currentSong: currentSongReducer,
  isPlaying: isPlayingReducer,
  index: indexReducer
})
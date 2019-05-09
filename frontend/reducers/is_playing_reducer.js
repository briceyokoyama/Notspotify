 import { PLAY_SONG, PAUSE_SONG, RESUME_SONG } from '../actions/song_actions';

 const isPlayingReducer = (state = false, action) => {
   Object.freeze(state);
   switch (action.type) {
     case PLAY_SONG:
       return true;
      case RESUME_SONG:
        if (!action.currentSong && !action.isPlaying) {
          return false;
        } else {
          return true;
        }
      case PAUSE_SONG:
        return false;
     default:
       return state;
   }
 }

 export default isPlayingReducer;
import { PLAY_SONG, NEXT_SONG, PREVIOUS_SONG } from '../actions/song_actions';

const prevIndexReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case PLAY_SONG:
      return [];
    case NEXT_SONG:
      if (action.currSong) {
        return [...state, action.currSong]
      } else {
        return state;
      }
    case PREVIOUS_SONG:
      return state.slice(0, state.length-1)
    default:
      return state;
  }
}

export default prevIndexReducer;
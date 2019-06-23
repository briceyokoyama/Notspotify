import { PLAY_SONG, NEXT_SONG, PREVIOUS_SONG } from '../actions/song_actions'

const indexReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case PLAY_SONG:
      return action.payload.index;
    case NEXT_SONG:
      if (state === null) {
        return state;
      } else {
        return action.index;
      }
    case PREVIOUS_SONG:
      return action.index;
    default:
      return state;
  }
}

export default indexReducer;
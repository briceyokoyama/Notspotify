import { PLAY_SONG, NEXT_SONG } from '../actions/song_actions'

const indexReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case PLAY_SONG:
      return action.payload.index;
    case NEXT_SONG:
      if (state === null) {
        return state
      } else {
        return action.newIndex;
      }
    default:
      return state;
  }
}

export default indexReducer;
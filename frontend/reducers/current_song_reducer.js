import { PLAY_SONG } from '../actions/song_actions';

const currentSongReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case PLAY_SONG:
      return action.payload.song.id;
    default:
      return state;
  }
}

export default currentSongReducer;
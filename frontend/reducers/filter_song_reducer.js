import { PLAY_SONG } from '../actions/song_actions';

const filterSongReducer = (state=[], action) => {
  Object.freeze(state);
  switch (action.type) {
    case PLAY_SONG:
      return action.payload.songs;
    default:
      return state;
  }
};

export default filterSongReducer;
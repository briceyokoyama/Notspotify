import { PLAY_SONG, NEXT_SONG, PREVIOUS_SONG } from '../actions/song_actions';

const currentSongReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case PLAY_SONG:
      return Object.assign({}, state, {id: action.payload.song.id});
    case NEXT_SONG:
      return Object.assign({}, state, action.nextSong);
    case PREVIOUS_SONG:
      return Object.assign({}, state, action.nextSong)
    default:
      return state;
  }
}

export default currentSongReducer;
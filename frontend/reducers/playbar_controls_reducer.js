import { TOGGLE_RANDOM, TOGGLE_LOOP } from '../actions/song_actions';

const playbarReducer = (state = {isRandom: false, isLooping: false}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_RANDOM:
      return Object.assign({}, state, {isRandom: action.isRandom})
    case TOGGLE_LOOP:
      return Object.assign({}, state, {isLooping: action.isLooping})
    default:
      return state;
  }
}

export default playbarReducer;
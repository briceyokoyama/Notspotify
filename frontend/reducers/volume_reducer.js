import { SET_VOLUME } from '../actions/song_actions'

const volumeReducer = (state = 1, action) => {
    Object.freeze(state);
    switch (action.type) {
      case SET_VOLUME:
        return action.volume;
      default:
        return state;
    }
}

export default volumeReducer;
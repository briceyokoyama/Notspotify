import { combineReducers } from 'redux';
import sessionErrorsReducer from '../reducers/session_errors_reducer'

export default combineReducers({
  session: sessionErrorsReducer
})
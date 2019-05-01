import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGUOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";


export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
  currentUser: {}
})

export const receiveSessionErrors = (errors) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  })
}

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(e => dispatch(receiveSessionErrors(e.responseJSON)))
)

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
    .fail(e => dispatch(receiveSessionErrors(e.responseJSON)))
)

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(e => dispatch(receiveSessionErrors(e.responseJSON)))
)
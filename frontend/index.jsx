import React from 'react';
import ReactDOM from 'react-dom';
import congfigureStore from './store/store';

//testing only
import { receiveCurrentUser, logoutCurrentUser, receiveSessionErrors } from './actions/session_actions';
import * as APIUtil from './util/session_api_util';


document.addEventListener("DOMContentLoaded", () => {
  const store = congfigureStore();
  const root = document.getElementById("root");
  //for testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.APIUtil = APIUtil;
  window.receiveCurrentUser = receiveCurrentUser;
  window.logoutCurrentUser = logoutCurrentUser;
  window.receiveSessionErrors = receiveSessionErrors;


  ReactDOM.render(<h1>hi there</h1>, root)
})


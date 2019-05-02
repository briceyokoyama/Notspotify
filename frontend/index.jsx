import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {

  //bootstrap the user
  let preloadedState;
  if ( window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: {id: window.currentUser.id}
    };
    delete window.currentUser;
  } else {
    preloadedState = {};
  }

  const store = configureStore(preloadedState);
  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root)
})


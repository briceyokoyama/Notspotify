import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './mainpage/MainPage';
import LoginFormContainer from './sessionform/LoginFormContainer';
import SignupFormContainer from './sessionform/SignupFormContainer';

const App = () => (
  <Switch>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={MainPage} />
  </Switch>
)

export default App;
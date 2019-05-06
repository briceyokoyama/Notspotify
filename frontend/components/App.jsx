import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './mainpage/MainPage';
import LoginFormContainer from './sessionform/LoginFormContainer';
import SignupFormContainer from './sessionform/SignupFormContainer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PlayerPage from './playerpage/PlayerPage'

const App = () => (
  <Switch>
    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
    <ProtectedRoute path="/home" component={PlayerPage} />
    <AuthRoute exact path="/" component={MainPage} />
    <Redirect from='/' to='/' />
  </Switch>
)

export default App;
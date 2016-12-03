import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory } from 'history';
import { useRouterHistory } from 'react-router';


import { Router, Route, Redirect, Link, hashHistory } from 'react-router'

import App from './App';
import UserProfile from './pages/UserProfile';
import CompanyRegister from './pages/CompanyRegister';
import UserRegister from './pages/UserRegister';

const browserHistory2 = useRouterHistory(createHistory)({
    basename: '/home/'
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/user-register" component={UserRegister} />
    <Route path="/company-register" component={CompanyRegister} />
    <Route path="/user-profile" component={UserProfile} />
    <Redirect from="/" to="/user-register" />
  </Router>,
  document.getElementById('root')
);

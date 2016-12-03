import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './App';
import UserProfile from './pages/UserProfile';
import CompanyRegister from './pages/CompanyRegister';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/user-register" component={App} />
    <Route path="/company-register" component={CompanyRegister} />
    <Route path="/user-profile" component={UserProfile} />
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory } from 'history';
import { useRouterHistory } from 'react-router';


import { Router, Route, Redirect, Link, hashHistory } from 'react-router'

import App from './App';
import UserProfile from './pages/UserProfile';
import CompanyProfile from './pages/CompanyProfile';
import CompanyRegister from './pages/CompanyRegister';
import UserRegister from './pages/UserRegister';
import Login from './pages/Login';
import Register from './pages/Register';
import JobDetails from './pages/JobDetails';
import UserLibrary from './pages/UserLibrary';
import LibraryPage from './pages/LibraryPage';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/user-register" component={UserRegister} />
    <Route path="/company-register" component={CompanyRegister} />
    <Route path="/user-profile" component={UserProfile} />
    <Route path="/company-profile" component={CompanyProfile} />
    <Route path="/user-library" component={UserLibrary} />
    <Route path="/library-page" component={LibraryPage} />
    <Route path="/job-details" component={JobDetails} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Redirect from="/" to="/user-register" />
  </Router>,
  document.getElementById('root')
);

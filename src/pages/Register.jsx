import React, {Component} from 'react';
import { Link } from 'react-router'
/* eslint-disable */
class Register extends Component {
  componentDidMount(){
    loadCSS('assets/pages/css/lock.min.css');
    loadCSS('assets/pages/css/login.min.css');
    loadCSS('assets/layouts/global/main.css');
    loadCSS('assets/css/style.css');
  }
  render(){
    return (
    <div className="page-lock">
        <div className="page-logo">
          <a className="brand" href="index.html">
            <img src="assets/images/logo.png" width={120} alt="logo" /> </a>
        </div>
        <div className="page-body">
          <div className="form-login-wrapper">
            <div className="lock-head"> Registration </div>
            <div className="lock-body login-body">
              <Link to="user-register" className="btn btn-circle green-jungle btn-block btn-lg m-icon-big">Personal</Link>
              <Link to="company-register" className="btn btn-circle green-jungle btn-block btn-lg m-icon-big pull-right">Human Resource</Link>
            </div>
          </div>
          <div className="form-forget-wrapper" style={{display: 'none'}}>
            <div className="lock-head"> Forget Password ? </div>
            <div className="lock-body forget-body">
              <form className="lock-form forget" action="index.html" method="post">
                <p> Enter your e-mail address below to reset your password. </p>
                <div className="form-group">
                  <input className="form-control placeholder-no-fix" type="text" autoComplete="off" placeholder="Email" name="email" />
                </div>
                <div className="form-actions">
                  <button type="button" id="back-btn" className="btn green btn-outline">Back</button>
                  <button type="submit" className="btn btn-success uppercase pull-right">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="page-footer-custom"> 2016 © MediSquared. All Rights Reserved. </div>
      </div>

    );
  }
};
export default Register;
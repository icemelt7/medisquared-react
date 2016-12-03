import React, {Component} from 'react';
/* eslint-disable */
class Login extends Component {
  componentDidMount(){
    loadCSS('assets/pages/css/lock.min.css');
    loadCSS('assets/pages/css/login.min.css');
    loadCSS('assets/layouts/global/css/main.css');
    loadCSS('assets/css/main.css');
  }
  render(){
    return (

      <div className="page-lock">
        <div className="page-logo">
          <a className="brand" href="index.html">
            <img src="./images/logo.png" width={100} alt="logo" /> </a>
        </div>
        <div className="page-body">
          <div className="form-login-wrapper">
            <div className="lock-head"> Login </div>
            <div className="lock-body login-body">
              <form className="lock-form login" action="index.html" method="post">
                <div className="form-group">
                  <label className="control-label visible-ie8 visible-ie9">Username</label>
                  <input className="form-control placeholder-no-fix" type="text" autoComplete="off" placeholder="Username" name="username" />
                </div>
                <div className="form-group">
                  <label className="control-label visible-ie8 visible-ie9">Password</label>
                  <input className="form-control placeholder-no-fix" type="password" autoComplete="off" placeholder="Password" name="password" />
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn green uppercase">Login</button>
                  <label className="rememberme check mt-checkbox mt-checkbox-outline">
                    <input type="checkbox" name="remember" defaultValue={1} />Remember
                    <span />
                  </label>
                  <a href="javascript:;" id="forget-password" className="forget-password">Forgot Password?</a>
                </div>
              </form>
            </div>
            <div className="login-options">
              <h4>Or login with</h4>
              <ul className="social-icons">
                <li>
                  <a className="social-icon-color facebook" data-original-title="facebook" href="javascript:;" />
                </li>
                <li>
                  <a className="social-icon-color twitter" data-original-title="Twitter" href="javascript:;" />
                </li>
                <li>
                  <a className="social-icon-color googleplus" data-original-title="Goole Plus" href="javascript:;" />
                </li>
                <li>
                  <a className="social-icon-color linkedin" data-original-title="Linkedin" href="javascript:;" />
                </li>
              </ul>
            </div>
            <div className="lock-bottom">
              <a href="user-register.html">Create an account</a>
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
                  <button type="submit" className="btn btn-green uppercase pull-right">Submit</button>
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
export default Login;
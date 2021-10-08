import React from "react";
import "./login.scss";

function Login() {
  return (
    <div className="login">
      <div className="login-content">
        <form className="row login-form">
          <h1>Log in to your account</h1>
          <div className="col-md-12 pb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email Address
            </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>{" "}
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="col-md-12 pb-3">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-lock"></i>{" "}
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
          <div className="footer">
            Don't have an account?
            <a href="/register">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

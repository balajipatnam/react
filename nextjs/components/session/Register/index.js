import classNames from "classnames";
import React from "react";
import Link from "next/link";

import styles from "./login.module.scss";

function Register() {
  function register(e) {
    e.preventDefault();
    localStorage.setItem("authToken", true);
    // history.push("/dashboard");
  }
  return (
    <div className={styles.login}>
      <div className={styles.loginContent}>
        <form
          className={classNames("row", styles.loginForm)}
          onSubmit={register}
        >
          <h4>Register</h4>
          <div className="col-md-12 pb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email Address
            </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className={classNames(
                    styles.inputGroupText,
                    "input-group-text"
                  )}
                >
                  <i className="fas fa-user"></i>
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
                <span
                  className={classNames(
                    styles.inputGroupText,
                    "input-group-text"
                  )}
                >
                  <i className="fas fa-lock"></i>
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
          <div className={styles.footer}>
            Don't have an account?
            <Link href="/login">
              <a>Sign Up</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

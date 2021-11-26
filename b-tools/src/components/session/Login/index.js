import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useHistory } from 'react-router';
import MUIInput from 'components/shared/MUIInput';
import MUIButton from 'components/shared/MUIButton';
import MUICheckbox from 'components/shared/MUICheckbox';

import './login.scss';
import logoImg from 'assets/images/logo.png';

function Login() {
  const [loading, setIsLoading] = useState(false);
  const history = useHistory();
  function signIn(e) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem('authToken', true);
      history.push('/dashboard');
    }, 2000);
  }
  return (
    <div className="login">
      <Grid container className="login-content">
        <Grid item lg={7} sm={7} md={7} xs={12}>
          <div className="banner">
            <img src={logoImg} width="100" height="auto" />
          </div>
        </Grid>
        <Grid
          item
          lg={5}
          sm={5}
          md={5}
          xs={12}
          className="login-content-container"
        >
          <Box component="form" noValidate autoComplete="off">
            <h1>Welcome!</h1>
            <h4>Please Login to your account</h4>
            <MUIInput label="Email" placeholder="Enter your email id" />
            <MUIInput label="Password" placeholder="Enter your password" />
            <div className="rememberMe">
              <MUICheckbox label="Remember Me" />
              <a href="/forgot-password">Forgot Password?</a>
            </div>
            <MUIButton
              type="submit"
              text="Login"
              onClick={signIn}
              loading={loading}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;

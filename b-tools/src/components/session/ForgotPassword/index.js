import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router';

import MUIInput from 'components/shared/MUIInput';
import MUIButton from 'components/shared/MUIButton';

import './forgotPassword.scss';

function ForgotPassword() {
  const [loading, setIsLoading] = useState(false);
  const history = useHistory();
  function send(e) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      history.push('/login');
    }, 2000);
  }
  return (
    <div className="forgot-password">
      <Grid
        container
        className="forgot-password-content"
        direction="column"
        alignItems="center"
        justifyContent="center"
        xs={12}
      >
        <Box component="form" noValidate autoComplete="off">
          <h3>Forget your password ?</h3>
          <p>
            Enter your email address and with your account and wait to recover
          </p>
          <MUIInput label="Email" placeholder="Enter your email id" />

          <MUIButton
            type="submit"
            text="Send"
            onClick={send}
            loading={loading}
          />
          <div className="rememberMe">
            Do you remember your password?
            <a href="/login">try to signin?</a>
          </div>
        </Box>
      </Grid>
    </div>
  );
}

export default ForgotPassword;

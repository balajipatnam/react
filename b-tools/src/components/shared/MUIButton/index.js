import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

import CircularProgress from '@mui/material/CircularProgress';
import './mui-button.scss';
import classNames from 'classnames';

function MUIButton({ text, children, disabled, loading, className, ...rest }) {
  return (
    <Button
      {...rest}
      disableElevation
      disabled={loading || disabled}
      className={classNames('mui-button', className)}
    >
      {text}
      {children}
      {loading && <CircularProgress thickness={4} size={20} className="ml-1" />}
    </Button>
  );
}
MUIButton.defaultProps = {
  disabled: false,
  loading: false,
  text: 'button',
  variant: 'contained',
  color: 'primary',
};

MUIButton.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
};
export default MUIButton;

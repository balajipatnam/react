import * as React from 'react';
import TextField from '@mui/material/TextField';
import './mui-input.scss';

function MUIInput({ InputAdornment, label, ...rest }) {
  return (
    <div className="mui-input">
      {label && <label>{label}</label>}
      <TextField
        InputProps={{
          startAdornment: InputAdornment,
        }}
        InputLabelProps={{ shrink: false }} // Disable focus
        {...rest}
      />
    </div>
  );
}
MUIInput.defaultProps = {
  label: '',
  disabled: false,
  fullWidth: false,
  placeholder: '',
  className: '',
  size: 'small',
  type: 'text',
};

export default MUIInput;

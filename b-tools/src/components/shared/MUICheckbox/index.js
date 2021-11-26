import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import './mui-checkbox.scss';

function MUICheckbox({ label, ...rest }) {
  return (
    <div className="mui-checkbox">
      <FormControlLabel control={<Checkbox {...rest} />} label={label} />
    </div>
  );
}
MUICheckbox.defaultProps = {
  label: '',
  disabled: false,
};

export default MUICheckbox;

import * as React from 'react';
import PropTypes from 'prop-types';

import './mui-select.scss';
import classNames from 'classnames';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function MUISelect({
  itemValue,
  itemLabel,
  label,
  placeholder,
  items,
  value,
  className,
  ...rest
}) {
  const finalValue = !value ? '-None-' : value;
  return (
    <FormControl className={classNames('mui-select', className)}>
      {label && <label>{label}</label>}
      <Select {...rest} input={<OutlinedInput />} value={finalValue}>
        <MenuItem value={'-None-'}>
          {`- ${placeholder} -` || '- None -'}
        </MenuItem>
        {items &&
          !itemValue &&
          !itemLabel &&
          items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}

        {/* If we wants to set Custom Lable and Name instead of default label and value keys */}
        {items &&
          itemValue &&
          itemLabel &&
          items.map((item) => (
            <MenuItem key={item.value} value={item[itemValue]}>
              {item[itemLabel]}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
MUISelect.defaultProps = {
  label: '',
  disabled: false,
  fullWidth: false,
  placeholder: '',
  className: '',
  size: 'small',
  type: 'text',
};

MUISelect.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired,
};
export default MUISelect;

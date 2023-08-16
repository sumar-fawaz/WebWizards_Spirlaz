import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const RadioButtons = () => (
  <FormControl>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormControlLabel
        sx={{
          '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)': {
            color: '#b936ee',
          },
          '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
            color: 'primary',
          },
        }}
        value="female"
        control={<Radio />}
        label="Male"
      />
      <FormControlLabel
        sx={{
          '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)': {
            color: '#b936ee',
          },
          '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
            color: 'primary',
          },
        }}
        value="male"
        control={<Radio />}
        label="Female"
      />
      <FormControlLabel
        sx={{
          '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)': {
            color: '#b936ee',
          },
          '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
            color: 'primary',
          },
        }}
        value="other"
        control={<Radio />}
        label="Other"
      />
    </RadioGroup>
  </FormControl>
);

export default RadioButtons;

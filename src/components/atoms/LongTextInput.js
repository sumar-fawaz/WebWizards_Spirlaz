import React from 'react';
import TextField from '@mui/material/TextField';

const LongTextInput = ({ placeholder, ...restProps }) => (
  <TextField
    multiline
    rows={3}
    variant="outlined"
    label=""
    focused
    placeholder={placeholder}
    fullWidth
    sx={{
      "& .MuiInputBase-root": {
        color: 'secondary.main',
        borderColor: 'secondary.main',
      },
      width: { sm: 350, md: 350 },
      "& .MuiInputBase-root": {
        height: 80,
        color: 'secondary.main',
        borderColor: 'secondary.main',
      },
    }}
    {...restProps} // Spread any additional props
  />
);

export default LongTextInput;

import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({ label, placeholder }) => {
  return (
    <TextField
    sx={{
        "& .MuiInputBase-root": {
        color: 'secondary.main',
        borderColor: 'secondary.main',
       
      }
    }}

    label={label}
    variant="outlined"
    placeholder={placeholder}
    focused
    autoComplete='off'
    fullWidth
  />
  );
};

export default TextInput;

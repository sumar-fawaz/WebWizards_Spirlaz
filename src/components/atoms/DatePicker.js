import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';

const DatePicker = ({ label }) => {
  return (
    <div className='datepicker-custom-div'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          label={label}
          defaultValue={dayjs()}
          fullWidth
        />
      </LocalizationProvider>
    </div>
  );
};

export default DatePicker;

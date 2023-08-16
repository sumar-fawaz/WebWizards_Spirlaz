import React, { useState } from 'react'; // Import useState
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import Paper from '@mui/material/Paper'; // Import Paper component
import { dark } from '@clerk/themes';
import { useNow } from '@mui/x-date-pickers/internals';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import ButtonSquared from './atoms/ButtonSquared';
import createCustomTheme from './atoms/createCustomTheme';
import TextInput from './atoms/TextInput';
import DatePicker from './atoms/DatePicker';
import RadioButtons from './atoms/RadioButtons';
import PersonalInformationForm from './molecules/PersonalInformationForm';
import LongTextInput from './atoms/LongTextInput';
import MedicalForm from './molecules/MedicalForm';
import CustomSelect from '../components/atoms/CustomSelect'; // Adjust the import path
import PhysicalAttributesForm from './molecules/PhysicalAttributesForm';


const theme = createCustomTheme();


const LeoneCharta = () => {
  return (

    <>
      <section id='leonecharta'> 
      <PersonalInformationForm/>
      </section>
      
      <section>
        <MedicalForm/>
      </section>

      <section>
        <PhysicalAttributesForm/>
      </section>
    </>
   
  )
}
export default LeoneCharta;
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../atoms/createCustomTheme'; // Adjust the import path

import LongTextInput from '../atoms/LongTextInput';
import TextInput from '../atoms/TextInput';
import ButtonSquared from '../atoms/ButtonSquared';

const MedicalForm = () => {
  return (
    <div className='min-h-[100vh] lg:min-h-[78vh] flex mt-5 mb-3 p-5 items-start gap-y-8' id='leonechartamedical'>
      <div className='container mx-auto'>
        <div className='text-center mb-6 lg:text-center'>
          <h5 className='section-subheadings'>
            <b>YOUR MEDICAL CONDITIONS CREATE AN IMPACT DURING THE SPACE FARING</b>
          </h5>
        </div>

        <div className='justify-center mb-2'>
          <ThemeProvider theme={theme}>
            <form className='gap-y-2'>
              <LongTextInput placeholder={'Any Pre-existing Medical Conditions'} />
              <br />
              <br />
              <LongTextInput placeholder={'Allergies'} />
              <br />
              <br />
              <LongTextInput placeholder={'Current Medications'} />
              <br />
              <br />
              <TextInput placeholder={'Emergency Contact Number'} />
              <br />
              <br />
            </form>
          </ThemeProvider>
          <div className='bottom-4 lg:bottom-8 text-center'>
            <ButtonSquared text={'NEXT'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalForm;

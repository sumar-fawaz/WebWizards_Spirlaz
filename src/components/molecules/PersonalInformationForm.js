import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../atoms/createCustomTheme'; // Adjust the import path

import TextInput from '../atoms/TextInput';
import DatePicker from '../atoms/DatePicker';
import RadioButtons from '../atoms/RadioButtons';
import ButtonSquared from '../atoms/ButtonSquared';

const PersonalInformationForm = () => {
  return (
    <section className='min-h-[100vh] lg:min-h-[78vh] flex mt-5 mb-3 p-5 items-start gap-y-8'>
      <div className='container mx-auto'>
        <div className='text-center mb-6 lg:text-center'>
          <h4 className='section-yellow-text'>
            <b>LeoneCharta</b>
          </h4>
          <h5 className='section-subheadings'>
            <b>This is your personal information</b>
          </h5>
        </div>
        <div className=' justify-center mb-2'>
          <ThemeProvider theme={theme}>
            <form className='gap-y-2'>
              <TextInput placeholder={'Full Name'} />
              <br />
              <br />
              <DatePicker label={'Date Of Birth'} />
              <div className='flex flex-row text-blue-400 justify-stretch radio-group'>
                <RadioButtons />
              </div>
              <br />
              <TextInput placeholder={'Email'} />
              <br />
              <br />
              <TextInput placeholder={'Nationality'} />
            </form>
          </ThemeProvider>
        </div>
        <div className='bottom-4 lg:bottom-8 text-center'>
          <ButtonSquared text={'NEXT'} />
        </div>
      </div>
    </section>
  );
};

export default PersonalInformationForm;

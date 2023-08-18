import React, { useState } from 'react';
import CustomSelect from '../atoms/CustomSelect'; // Update the import path
import ButtonSquared from '../atoms/ButtonSquared'; // Update the import path
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider from MUI
import createCustomTheme from '../atoms/createCustomTheme'; // Import your theme

const OuterTheme = createCustomTheme();
const PhysicalAttributesForm = () => {
    const heightOptions = [
        { value: 0, label: 'Height (Ft)' },
        { value: 10, label: 'Ten' },
        { value: 20, label: 'Twenty' },
        { value: 30, label: 'Thirty' },
      ];

      const weightOptions = [
        { value: 0, label: 'Weight (kl)' },
        { value: 50, label: '50' },
        { value: 70, label: '70' },
        { value: 90, label: '90' },
      ];

      const fitnessOptions = [
        { value: 0, label: 'Weight (kl)' },
        { value: 50, label: '50' },
        { value: 70, label: '70' },
        { value: 90, label: '90' },
      ];

      const [selectedHeight, setSelectedHeight] = useState(0);
      const [selectedWeight, setSelectedWeight] = useState(0);
      const [selectedFitness, setSelectedFitness] = useState(0);

      const handleFitnessChange = (event) => {
        setSelectedFitness(event.target.value);
      }

      const handleHeightChange = (event) => {
        setSelectedHeight(event.target.value);
      };

      const handleWeightChange = (event) => {
        setSelectedWeight(event.target.value);
      };

      return(
        <section className='min-h-[100vh] lg:min-h-[78vh] flex mt-5 mb-3 p-5 items-start gap-y-8' id='leonechartaphysicalattributes'>
      <div className='container mx-auto'>
        <div className='text-center mb-6 lg:text-center'>
          <h5 className='section-subheadings'>
            <b>WE NEED YOUR PHYSICAL ATTRIBUTES AND FITNESS LEVEL, PLEASE MAKE SURE THAT YOUR PHYSICAL ATTRIBUTES ARE PERFECT FOR THE SPACESUIT</b>
          </h5>
        </div>

        <div className='justify-center mb-2'>
          <ThemeProvider theme={OuterTheme}>
            {
              <form className='gap-y-2'>
              <CustomSelect
                value={selectedHeight}
                onChange={handleHeightChange}
                options={heightOptions}
              />
              <br/>
              <br/>
              <CustomSelect
                value={selectedWeight}
                onChange={handleWeightChange}
                options={weightOptions}
              />
              <br/>
              <br/>
              <CustomSelect
                value={selectedFitness}
                onChange={handleFitnessChange}
                options={fitnessOptions}
              />
              <br/>
              <br/>
              <div className='bottom-4 lg:bottom-8 text-center'>
                <ButtonSquared text={'CREATE'}/>
              </div>
            </form>
            }
          </ThemeProvider>
        </div>
      </div>
    </section>
    );
      
};

export default PhysicalAttributesForm;
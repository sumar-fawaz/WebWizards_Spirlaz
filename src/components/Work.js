import React from 'react';

import {motion} from 'framer-motion';

import {fadeIn} from '../variants'

import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br/> 
              Work
              </h2>
              <p className='max-w-sm mb-16'>In the heart of the bustling city, amidst the constant ebb and flow of people, stands a quiet and unassuming bookstore. Its weathered facade, adorned with ivy creeping up the sides, seems to 
              hold secrets of countless stories within its walls
              </p>
              <button className='btn btn-sm'>View all projects</button>
            </div>
            {/*image*/}
            <div className='group relative overlfow-hidden border-2 border-white/50 rounded-xl'>
              {/*overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img */}
              <img className=' transition-all duration-500' src={Img1} alt=''/>
              {/*Pretitle */}
              <div>UI/UX Design</div>
              {/*Title */}

              <div>
                <span>Project Title</span>
              </div>
            </div>
          </div>
          <div>2</div>

        </div>
      </div>
    </section>
  );
};

export default Work;

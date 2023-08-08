import React,{useEffect} from 'react'
import { useState } from 'react'
import { RingLoader } from 'react-spinners';
import App from '../App';
import "../custom/Custom.css";


//import RingLoader from "react-spinners/RingLoader";
const SplashScreen = () => {
    
  return (
    //<div>SplashScreen</div>
    <div>
         <RingLoader size={60} color='white' />
         <div className='teamSignaturetext'>

          <h3>Web Wizards</h3>

         </div>
    </div>
  )
}

export default SplashScreen
import logo from './logo.svg';
import './App.css';
import SplashScreen from './components/SplashScreen';
import React,{useEffect} from 'react'
import { useState } from 'react'
import { RingLoader } from 'react-spinners';
import './custom/Custom.css'
function App() {
  const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 8000)
    },[])
  return (
    <div className="App">
     
      
      {
           loading? (
            

            <header className='splashScreen'>

            <SplashScreen/>

            </header>


           ) : (
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
           )
            
        }
            
    </div>
  );
}

export default App;

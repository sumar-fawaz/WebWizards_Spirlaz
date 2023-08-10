import React, { useEffect, useState } from 'react';
import SplashScreen from './components/SplashScreen';
import { useAuth, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import Header from './components/Header';
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Decision from './components/Decision';



function App() {
  const [loading, setLoading] = useState(false);
  const { isLoaded: authLoaded, userId, sessionId } = useAuth();
  const { isLoaded: userLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <header className='splashScreen'>
          <SplashScreen />
        </header>
      ) : (
        <header className='App-header'>

        {/*Show sign-in button if user is not signed in */}

        
          {!isSignedIn &&(
            <Decision/>
          )}
        

        {authLoaded && userLoaded && isSignedIn && (
            <div className='bg-black bg-no-repeat bg-cover overflow-hidden'>
            <Header/>
            <Banner/>
            <Nav/>
            <About/>
            <Services/>
            
            <Work/>
            <Contact/>
            <div className='h-[4000px]'></div>
            </div>
          )}

          
        </header>
        
      )}
    </div>
  );
}

export default App;

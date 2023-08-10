import React from 'react';
import { useUser, UserButton } from "@clerk/clerk-react"; // Import UserButton from clerk-react
import Logo from '../assets/Our Logo.png';

const Header = () => {
  const { isLoaded: userLoaded, isSignedIn, user } = useUser(); // Use the useUser hook

  return (
    <header className='py-7'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
           {/* Render UserButton when user is signed in */}
          <a href='#'>
            <img src={Logo} alt='Logo' />
          </a>
          {isSignedIn ? <button className='btn btn-sm'><UserButton/></button>  : <button className='btn btn-sm'>Service</button>} {/* Hide "Service" button when user is signed in */}
        </div>
      </div>
    </header>
  );
};

export default Header;

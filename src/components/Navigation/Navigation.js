import React from 'react';
import { IonButton } from '@ionic/react';

const Navigation = ({ onroutechange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onroutechange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onroutechange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
          <p onClick={() => onroutechange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
          <p onClick={() => onroutechange('home')} className='f3 link dim black underline pa3 pointer'>+ add </p>
        </nav>
      );
    }
}

export default Navigation;
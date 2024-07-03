import React, { useState } from 'react';
import './styles/hasAccount.css';
import Signup from './Signup'; 
import Signin from './Signin'; 
import Menu from '../projet_fin/home/Menu';
import Heeder from '../projet_fin/home/Heeder';

function HasAccount() {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleRadioChange = (event) => {
    setIsSigningUp(event.target.value === "signup");
  };

  return (
    <div className="Apphas">
      <Menu/>
      <div className='hassig'>
        <div className="image-sectionha"></div>
        <div className="slider-radioha">
          <div className='has-accountha'>
            <div>
              <input
                type="radio"
                id="signin"
                name="authType"
                value="signin"
                checked={!isSigningUp}
                onChange={handleRadioChange}
              />
              <label htmlFor="signin">I'm already registered</label>
            </div>
            <div>
              <input
                type="radio"
                id="signup"
                name="authType"
                value="signup"
                checked={isSigningUp}
                onChange={handleRadioChange}
              />
              <label htmlFor="signup">I'm new to Tanger Patisserie</label>
            </div>
          </div>
          <div className="" >
            {isSigningUp ? <Signup /> : <Signin />}
            {/* <h1>jhjh</h1> */}
          </div>
        </div>        
      </div>

      <Heeder/>
    </div>
  );
}

export default HasAccount;

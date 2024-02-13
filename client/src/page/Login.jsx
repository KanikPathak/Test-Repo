import React, { useState } from 'react';
import Signup from './Signup'; // Import the Signup component
import SignupReader from './SignupReader';

const RegistrationPage = () => {
  const [selectedOption, setSelectedOption] = useState('reader');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="registration-page">
      <h2>Registration</h2>

      <div className="registration-options">
        <label>
          <input
            type="radio"
            value="reader"
            checked={selectedOption === 'reader'}
            onChange={() => handleOptionChange('reader')}
          />
          Register as Reader
        </label>

        <label>
          <input
            type="radio"
            value="doctor"
            checked={selectedOption === 'doctor'}
            onChange={() => handleOptionChange('doctor')}
          />
          Register as Doctor
        </label>
      </div>

      {selectedOption === 'reader' && <SignupReader/>}
      {selectedOption === 'doctor' && <Signup />}
    </div>
  );
};


export default RegistrationPage;

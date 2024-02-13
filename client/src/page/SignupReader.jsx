import React, { useState } from 'react';
//import './DoctorRegistrationForm.css'; // Import the CSS file

const DoctorRegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hospital, setHospital] = useState('');
  const [showPopup, setShowPopup] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      // You can handle the password mismatch error (e.g., display an error message)
      return;
    }
    setShowPopup(true);
    // try {
    //   // Assuming there is an API endpoint for doctor registration
    //   const response = await fetch('your-api-endpoint-for-doctor-registration', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       fullName,
    //       doctorId,
    //       password,
    //       hospital,
    //     }),
    //   });

    //   if (response.ok) {
    //     // Registration successful
    //     console.log('Doctor registered successfully');
    //     setShowPopup(true);
    //   } else {
    //     // Handle registration failure (e.g., display error message)
    //     console.error('Doctor registration failed');
    //   }
    // } catch (error) {
    //   console.error('Error during doctor registration:', error);
    // }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    // Redirect to the home page or perform other actions
    // For simplicity, let's assume you have a function to handle the redirect
    redirectToHomePage();
  };

  const redirectToHomePage = () => {
    // Perform the actual redirection logic
    console.log('Redirecting to the home page');
    // Replace the following line with your actual redirection code
    window.location.href = '/'; // Example: Redirect to the root path
  };

  return (
    <div className="registration-container">
      <h2>Reader Registration</h2>
      <br/>
      <form onSubmit={handleSubmit} className="registration-form">
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email ID:
          <input
            type="text"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>

      {showPopup && (
        <div className="popup-background">
          <div className="popup">
            <p>Thank you for registering! Enjoy the blogs</p>
            <button onClick={handlePopupClose}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorRegistrationForm;

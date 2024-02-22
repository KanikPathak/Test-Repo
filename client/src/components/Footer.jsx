import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-text">
          <h1>Clinical AI Assistance</h1>
          <p>Your trusted source for clinical AI solutions</p>
          <div className='footer__copyright'>
            <small>&copy; Clinical AI Assistance. All Rights Reserved.</small>
          </div>
        </div>
        <div className="footer-links">
          <Link to={'/'} className='footer_link'>Home</Link>
          <Link to={'/create'} className='footer_link'>Create Post</Link>
          <Link to={'#'} className='footer_link'>Login</Link>
          <Link to={'#'} className='footer_link'>FAQ</Link>
          <Link to={'#'} className='footer_link'>About Us</Link>
          <Link to={'#'} className='footer_link'>Contact Us</Link>
          <Link to={'#'} className='footer_link'>Terms of Service</Link>
          <Link to={'#'} className='footer_link'>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-text">
          <h1>Clinical AI Assistance</h1>
          <p>Your trusted source</p>
          <div className='footer__copyright'>
            <small>Copyright&copy; Clinical AI Assistance. All Rights Reserved.</small>
          </div>
        </div>
        <div className="footer-links">
          <a href='/' className='footer_link'>Home</a>
          <Link to={'/create'} className='footer_link'>Create Post</Link>
          <Link to={'#'} className='footer_link'>Login</Link>
          <Link to={'#'} className='footer_link'>FAQ</Link>
        </div>
      </div>
      

    </footer>
  )
}

export default Footer
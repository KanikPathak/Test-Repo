import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-text">
          <h1>Health Blog</h1>
          <p>Your trusted source</p>
          <div className='footer__copyright'>
            <small>All Rights Reserved &copy; Copyright, ClinicalAiassitance private Limited. </small>
          </div>
        </div>
        <div className="footer-links">
          <Link to={'/'} className='footer_link'>Home</Link>
          <Link to={'/create'} className='footer_link'>Create Post</Link>
          <Link to={'#'} className='footer_link'>Login</Link>
          <Link to={'#'} className='footer_link'>FAQ</Link>
        </div>
      </div>
      

    </footer>
  )
}

export default Footer
import React from "react";
import './style.css';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ReactComponent as Logo } from './Full.svg'
  
const Footer = () => {
  return (
    <div className='Footer'>
      <div className="FooterContainer">
        <div className='RowSection'>
          <Logo />
          <div className='columns'>
              <div className='followText'>Follow Us</div>
              <div className='socialColumns'>
                <a className='socialItemLink' href="https://twitter.com/avocadoapp_">
                    <FaTwitter />
                </a>
                <a className='socialItemLink' href="https://www.instagram.com/avocado_technologies/">
                    <FaInstagram />
                </a>
                <a className='socialItemLink' href="https://www.linkedin.com/company/avocado-financial/mycompany/">
                    <FaLinkedin />
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;
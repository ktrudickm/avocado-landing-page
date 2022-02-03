import React from "react";
import './style.css';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
  
const Footer = () => {
  return (
    <div className='Footer'>
      <div className="FooterContainer">
        <div className='RowSection'>
          <h1 className='MainHeading'>Avocado
          </h1>
          <div className='columns'>
              <div className='socialColumns'>
                <a className='socialItemLink' href="https://twitter.com/avocado_invest_">
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
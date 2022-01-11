import React from "react";
import './style.css';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
  
const Footer = () => {
  return (
    <div className='Footer'>
      <div className="FooterContainer">
        <div className='RowSection'>
          <h1 className='MainHeading'>Avocado
          </h1>
          <div className='columns'>
              <div className='socialColumns'>
                <a className='socialItemLink' href="#">
                    <FaTwitter />
                </a>
                <a className='socialItemLink' href="#">
                    <FaInstagram />
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;
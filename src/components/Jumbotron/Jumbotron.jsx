import React from 'react';
import { ReactComponent as Logo } from './Full.svg'
import { ReactComponent as Phone } from './Phone.svg'
import { Link as LinkS } from 'react-scroll';
import './style.css';

const Jumbotron= () => {
    return (
        <div className="jumbotron-container">
            <div className="jumbotron">
                <div className="leftColContainer">
                    <h3 className='description'>Say hello to avocado</h3>
                    <p className='subtext'>A value-driven social network designed to make investing more fun and approachable</p>
                    <LinkS className='button' to='waitlist' smooth={true} offset={-40} duration={1000}>Join Waitlist</LinkS>
                </div>
                <div className="rightColContainer">
                    <Phone style={{width: 'auto', height: 'auto'}} className="phone"/>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;


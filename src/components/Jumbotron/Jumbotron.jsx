import React from 'react';
import { ReactComponent as Logo } from './Full.svg'
import { Link as LinkS } from 'react-scroll';
import './style.css';

const Jumbotron= () => {
    return (
        <div className="jumbotron-container">
            <div className="jumbotron">
                <Logo className='jumbo-logo'/>
                <h3 className='description'>Say hello to Avocado - a social financial network where you can invest & place bets, join communities, and learn from experts.</h3>
                <LinkS className='button' to='waitlist' smooth={true} offset={-40} duration={1000}>Join Waitlist</LinkS>
            </div>
        </div>
    )
}

export default Jumbotron;
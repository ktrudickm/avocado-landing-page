import React from 'react';
import { ReactComponent as Logo } from './Full.svg'
import './style.css';

const Jumbotron= () => {
    return (
        <div className="jumbotron-container">
            <div className="jumbotron">
                <Logo className='jumbo-logo'/>
                <h3 className='description'>Say hello to Avocado - a social financial network where you can invest & place bets, join communities, and learn from experts.</h3>
            </div>
        </div>
    )
}

export default Jumbotron;
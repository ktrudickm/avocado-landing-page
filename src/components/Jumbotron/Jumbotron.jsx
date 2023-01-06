import React from 'react';
import { ReactComponent as Logo } from './Full.svg'
import './style.css';

const Jumbotron= () => {
    return (
        <div className="jumbotron-container">
            <div className="jumbotron">
                <Logo className='jumbo-logo'/>
                <h3 className='description'>Say hello to Avocado - a social investing network empowering individuals to seize opportunities, join communities, and achieve economic growth.</h3>
            </div>
        </div>
    )
}

export default Jumbotron;
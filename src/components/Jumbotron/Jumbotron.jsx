import React from 'react';
import { ReactComponent as Logo } from './Full.svg'
import './style.css';
import Newsletter from "../Newsletter/Newsletter";

const Jumbotron= () => {
    return (
        <div className="jumbotron-container">
            <div className="jumbotron">
                <Logo className='jumbo-logo'/>
                <h3 className='description'>We are a value-driven social network leveraging Web3 technologies to help individuals achieve economic growth and gain confidence in the world of investing and personal finance.</h3>
            </div>
        </div>
    )
}

export default Jumbotron;
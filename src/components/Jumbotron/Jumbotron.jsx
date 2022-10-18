import React from 'react';
import { ReactComponent as Logo } from './Full.svg'
import './style.css';
import Newsletter from "../Newsletter/Newsletter";

const Jumbotron= () => {
    return (
        <div className="jumbotron-container">
            <div className="jumbotron">
                <Logo />
                {/* <h1 className='title'>Start your investing journey today</h1> */}
                <h3 className='description'>We are a value-driven social network leveraging Web3 technologies to help individuals achieve economic growth and gain confidence in the world of investing and personal finance.</h3>
                {/* <a className="JumboBtn">Try Avocado</a> */}
            </div>
            {/* <Newsletter/> */}
        </div>
    )
}

export default Jumbotron;
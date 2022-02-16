import React from 'react';
import './style.css';
import Button from '@mui/material/Button';

const Jumbotron= () => {
    return (
        <div className="jumbotron">
            <h1 className='title'>Start your investing journey today</h1>
            <h3 className='description'>Avocado helps you invest and engage with stocks or crypto all in one place</h3>
            <a className="JumboBtn">Try Avocado</a>
        </div>
    )
}

export default Jumbotron;
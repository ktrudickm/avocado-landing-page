import React from 'react';
import './style.css';
import Button from '@mui/material/Button';

const Jumbotron= () => {
    return (
        <div className="jumbotron">
            <h1 className='title'>Start your investing journey today</h1>
            <h3 className='description'>Avocado helps you invest and engage with stocks and crypto all in one place</h3>
            <Button variant='contained' size="large">Try Avocado</Button>
        </div>
    )
}

export default Jumbotron;
import React from 'react';
import './style.css';
import SubscribeForm from '../SubscribeForm/SubscribeForm';

const Newsletter = () => {
    return (
        <div className="newsletter-container">
            <h2 className='newsletter-title'>Sign up for the GuacBox newsletter below!</h2>
            <SubscribeForm/>
        </div>
    )
}

export default Newsletter;
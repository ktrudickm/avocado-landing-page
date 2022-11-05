import React from 'react';
import './style.css';
import SubscribeForm from '../SubscribeForm/SubscribeForm';

const Newsletter = () => {
    return (
        <div className='full-container'>
            <div className="newsletter-container">
                <div className='subtitle-container'>
                    <h2 className='newsletter-title'>Join Our Newsletter!</h2>
                    <p className='newsletter-detail'>Stay up-to-date by subscribing to our newsletter.</p>
                </div>
                <SubscribeForm/>
            </div>
        </div>
    )
}

export default Newsletter;
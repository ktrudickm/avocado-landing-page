import React from 'react';
import './style.css';
import SubscribeForm from '../SubscribeForm/SubscribeForm';

const Newsletter = () => {
    return (
        <div className='full-container'>
            <div className="newsletter-container">
                <div className='subtitle-container'>
                    <h2 className='newsletter-title'>Join Our Newsletter!</h2>
                    <p className='newsletter-detail'>Stay up-to-date on lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit scelerisque dolor aliquet.</p>
                </div>
                <SubscribeForm/>
            </div>
        </div>
    )
}

export default Newsletter;
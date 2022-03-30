import React from 'react';
import './style.css';

const About = () => {
    return (
        <div className="mission-container">
            <h1 className='identity-title'>Who Are We?</h1>
            <div className='identity-description'>
                <div>We are a value-driven social network leveraging Web3 technologies to help individuals achieve
                economic growth and gain confidence in the world of investing and personal finance.</div>
            </div>
    
            <h1 className='mission-title'>Our Mission</h1>
            <div className='mission-description'>
                <div>It is our mission to build a community of leaders and learners that make up the next generation of
                    investing. We strive to provide a seamless experience and valuable ecosystem for all types of users, no
                    matter their financial, social, or personal goals. By showing people that investments of time will more
                    directly impact one’s life than investments of money, Avocado is redefining what it means to invest.</div>
            </div>

            <h1 className='value-title'>Core Values</h1>
            <div className='value-description'>
                <ul>
                    <li>Continuous Learning and Growth</li>
                    <li>Perseverance</li>
                    <li>Collaboration</li>
                    <li>Sustainability</li>
                    <li>Ownership</li>
                </ul>
            </div>
        
        </div>

    )
}

export default About;
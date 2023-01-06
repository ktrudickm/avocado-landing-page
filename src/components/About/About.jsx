import React from 'react';
import './style.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const About = () => {
    return (
        <div id='about' className="about-container">
            <div className='about-quote'>
            <div className='desc-container'>
                    <FaQuoteLeft className='quote'/>
                    <h2>We will always build with our users best interests in mind, and with their help, we can create a company that changes the way the world invests.</h2>
                    <FaQuoteRight className='quote'/>
                    <p>Kartik Raghuram, CEO</p>
                </div>
            </div>
            <div className='about-description'>
                <h1 className='about-title'>Our Story</h1>
                <div>Avocado was founded in March 2020 during a time of uncertainty and volatility in the stock market. Avocado was built on the premise that everyone should have the opportunity to build generational wealth, no matter their current knowledge base or financial status. We envision a community where people come together to educate and learn from one another, share ideas, perspectives, and insights, and grow as investors to ultimately achieve financial freedom.</div>
                <div>It is our mission to empower users to confidently take action towards financial freedom. We aim to build a community of leaders and learners that make up the next generation of finance and investing – self-managed, social, and decentralized. Avocado will create a valuable ecosystem for all types of users by providing opportunities to collaborate, learn, build wealth, and monetize one’s own unique value and data. </div>
            </div>
        </div>
    )
}

export default About;
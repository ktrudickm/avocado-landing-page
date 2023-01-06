import React from 'react';
import './style.css';

const Preview = () => {
    return (
        // <div id='preview' className="preview-container">
            
        //     <div className='preview-description'>
        //         <div>Avocado was founded in March of 2020, during a time of uncertainty and volatility in the stock market. We witnessed the rise of the retail investor and wanted to provide a platform that would give investors the tools to succeed. </div>
        //         <div>We have strived to level the playing field between Wall Street and the retail investor and will always build with that intention. “We will always build with our users best in mind and with their help, can create a company that changes the way the world invests.” Kartik Raghuram, CEO </div>
        //     </div>
            
        //     <h1 className='preview-title'>ABOUT US</h1>
        // </div>
        <div id='preview' className='preview-container'>
            <div className='image-container'>
                <img className="img1" src={require('../../images/iphone-pits.png')} alt="iphone-pits"/>
                <img className="img2" src={require('../../images/iphone-home.png')} alt="iphone-home"/>
                <img className="img3" src={require('../../images/iphone-explore.png')} alt="iphone-explore"/>
            </div>
            <div className="text-container">
                <h1 className="main-text">Social Investing, Reimagined.</h1>
                <div className="detail-container">
                    <div className="detail">
                        <h1>Q1 '23</h1>
                        <h2>Beta Launch</h2>
                    </div>
                    <div className="detail">
                        <h1>13</h1>
                        <h2>Employees</h2>
                    </div>
                    <div className="detail">
                        <h1>300+</h1>
                        <h2>Waitlist</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Preview;
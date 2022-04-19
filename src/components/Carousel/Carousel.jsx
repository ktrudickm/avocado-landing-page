import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import './style.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const captions = {
        0: "Avocado helps you invest and engage with stocks and crypto. Risks are worth taking, start your investing journey today!",
        1: "Explore all avenues that avocado has to offer. Follow friends and other financial professionals to fill your newsfeed with the latest engaging content.",
        2: "Pits are the core of avocado. Join or create a pit to engage with public figures and other investors on your favorite topics. " + 
           "Pits can be as simple as having a small group conversation with friends or public forums discussing major topics.",
        3: "Invest in your favorite stocks and cryptos, all from one spot. Engagement leads to investing decisions" 
    }

    return (
        <div className="root-container">
            <div className="carousel-container">
                <ReactCarousel
                    // width="40vw"
                    className="carousel"
                    showThumbs={false}
                    onChange={(currentIndex) => setCurrentIndex(currentIndex)}
                    autoPlay
                    centerMode
                    infiniteLoop
                    showArrows
                >
                    <img src="assets/avo.png"/>
                    <img src="assets/avo2.png"/>
                    <img src="assets/avo3.png"/>
                    <img src="assets/avo4.png"/>
                </ReactCarousel>
            </div>

            <div className="image-caption">
                <div>{captions[currentIndex]}</div>
            </div>
        </div>
    )

}

export default Carousel;
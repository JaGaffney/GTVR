import React from 'react';
import LazyHero from 'react-lazy-hero';

const HeroLandingImage = () => {
    return (
        <div className="hero-header">
            <LazyHero imageSrc="./static/frontend/img/vrkids.jpg" opacity={0.3} minHeight={"90vh"}>
                <h1 className="hero-header-text">Take teaching to the 21st centry with 'Teacher VR'</h1>
            </LazyHero>
        </div>
    );
};

export default HeroLandingImage;
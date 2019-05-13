import React from 'react';
import LazyHero from 'react-lazy-hero';

const HeroLandingImage = () => {
    return (
        <div className="hero-header">
            <LazyHero imageSrc="https://unsplash.it/2000/1000" opacity={0.3} minHeight={"90vh"}>
                <h1 className="hero-header-text">Take teaching to the 21st centry with 'Great Teacher VR'</h1>
            </LazyHero>
        </div>
    );
};

export default HeroLandingImage;
import React from "react";
import LazyHero from "react-lazy-hero";

const HeroLandingImage = props => {
    return (
        <div className="hero-header">
            <LazyHero
                imageSrc="./static/frontend/img/vrkids.jpg"
                opacity={0.3}
                minHeight={props.minHeight}
            >
                <h1 className="hero-header-text">
                    Take teaching to the 21st century with 'Teacher VR'
                </h1>
            </LazyHero>
        </div>
    );
};

export default HeroLandingImage;

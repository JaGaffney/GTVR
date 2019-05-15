import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../layout/animations/book.json'

const HomeAnimations = () => {


    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
    <div>
        <h1> test</h1>
      <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}/>
    </div>
    );
};

export default HomeAnimations;
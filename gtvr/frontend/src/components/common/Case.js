import React, { useState, useEffect } from 'react'

import InfiniteCarousel from 'react-leaf-carousel';

const Case = props => {
  let tempArray = [1,2,3,4,5,6,7]

  const generateImage = (item) => {
    return (
      <div className="case__div-carousel" key={item}>
        <div className="case__div-carousel-title">
          <h1>Dolor amet dolore magna ipsum</h1>
        </div>

        <div className="case__div-carousel-body">
          <p>
            Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor 
            consequat dolore est duis laborum cupidatat enim dolor. Proident do sint deserunt 
            magna laboris in cillum adipisicing sunt et dolor ullamco ex. Cillum sit incididunt cillum et esse 
            ut culpa qui nulla voluptate ut fugiat. Nostrud nisi eu dolor laboris anim qui ea anim voluptate. 
            Ut occaecat aliquip nulla amet est et ut pariatur tempor.
          </p>
          <p>
            Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor 
            consequat dolore est duis laborum cupidatat enim dolor. Proident do sint deserunt 
            magna laboris in cillum adipisicing sunt et dolor ullamco ex. Cillum sit incididunt cillum et esse 
            ut culpa qui nulla voluptate ut fugiat. Nostrud nisi eu dolor laboris anim qui ea anim voluptate. 
            Ut occaecat aliquip nulla amet est et ut pariatur tempor.
          </p>
        </div>
        <div className="case__div-carousel-image">
          <img
            alt=''
            src={"https://unsplash.it/2000/105" + item}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="case__div-Area">
      <div className="case__div">
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
          animationDuration={1000}
          autoCycle={true}
          cycleInterval={10000}
          pauseOnHover={true}
          dots={true}
          showSides={true}
          sidesOpacity={.5}
          sideSize={.1}
          slidesToScroll={1}
          slidesToShow={1}
          scrollOnDevice={true}
          swipe={false}
          arrows={true}
        >
          {tempArray.map(item => (
            generateImage(item)
          ))}
        </InfiniteCarousel>

      </div>
    </div>
  )
}

export default Case

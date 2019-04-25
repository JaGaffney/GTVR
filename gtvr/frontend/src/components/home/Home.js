import React, { useState } from 'react'

import Hero from './Hero'

import About from '../common/About'
import Case from '../common/Case'
//import Contact from './common/Contact'


const Home = props => {
  return (
    <div className="homepage__div-Area">

      <Hero />

      <div className="homepage__div-container">

        <div className="homepage__div-image">
          <div className="homepage__div-image-container">
            <img src={"https://unsplash.it/2000/1050"}></img>
          </div>
        </div>

        <div className="homepage__div-title">
          <h1>What is Great Teacher VR, (its purpose)</h1>
          <h4>Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis laborum cupidatat enim</h4>
        </div>

        <div className="homepage__div-info">
          <div className="homepage__div-info-container">
            <p>
              Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis laborum cupidatat enim dolor. Proident do sint deserunt magna laboris in cillum adipisicing sunt et dolor ullamco ex. Cillum sit incididunt cillum et esse ut culpa qui nulla voluptate ut fugiat. Nostrud nisi eu dolor laboris anim qui ea anim voluptate. Ut occaecat aliquip nulla amet est et ut pariatur tempor.
            </p>
            <p>
              Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis laborum cupidatat enim dolor. Proident do sint deserunt magna laboris in cillum adipisicing sunt et dolor ullamco ex. Cillum sit incididunt cillum et esse ut culpa qui nulla voluptate ut fugiat. Nostrud nisi eu dolor laboris anim qui ea anim voluptate. Ut occaecat aliquip nulla amet est et ut pariatur tempor.
            </p>
            <p>
              Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis laborum cupidatat enim dolor. Proident do sint deserunt magna laboris in cillum adipisicing sunt et dolor ullamco ex. Cillum sit incididunt cillum et esse ut culpa qui nulla voluptate ut fugiat. Nostrud nisi eu dolor laboris anim qui ea anim voluptate. Ut occaecat aliquip nulla amet est et ut pariatur tempor.
            </p>
        </div>
      </div>

      </div>


      <About />

      <Case />

    </div>
  )
}

export default Home

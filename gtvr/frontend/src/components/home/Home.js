import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

import Hero from './Hero'




const Home = props => {
  return (
    <div className="homepage__div-Area">

      <Hero />

      <div className="homepage__div-main">
        <div className="homepage__div-main-container">

          <div className="homepage__div-main-image">
            <div className="homepage__div-main-image-container">
              <img src={"https://unsplash.it/2000/1050"} style={{ backgroundColor: 'black', height: '25rem', width: '20rem'}}></img>
              <h3>Info about </h3>
              <p>Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing</p>
            </div>

            <div className="homepage__div-main-image-container">
              <img src={"https://unsplash.it/2000/1057"}  style={{ backgroundColor: 'black', height: '25rem', width: '20rem'}}></img>
              <h3>Info demo</h3>
              <p>DDolor amet dolore magna ipsum. Ipsum do occaecat adipisicingem0</p>
            </div>

            <div className="homepage__div-main-image-container">
              <img src={"https://unsplash.it/2000/1051"} style={{ backgroundColor: 'black', height: '25rem', width: '20rem'}}></img>
              <h3>Info blog </h3>
              <p>Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing</p>
            </div>

            <div className="homepage__div-main-image-container">
              <img src={"https://unsplash.it/2000/1052"} style={{ backgroundColor: 'black', height: '25rem', width: '20rem'}}></img>
              <h3>Info Testimonials </h3>
              <p>Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing</p>
            </div>
          </div>
            

        <div className="homepage__div-main-info">

          <div className="homepage__div-main-title">
            <div className="homepage__div-main-title-inner">
              <h1>What is Great Teacher VR</h1>
            </div>
          </div>

          <div className="homepage__div-main-content">
            <p>
              Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis laborum cupidatat enim dolor. Proident do sint deserunt magna laboris in cillum adipisicing sunt et dolor ullamco ex. Cillum sit incididunt cillum et esse ut culpa qui nulla voluptate ut fugiat. Nostrud nisi eu dolor laboris anim qui ea anim voluptate. Ut occaecat aliquip nulla amet est et ut pariatur tempor.
            </p>
            <p>
              Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis laborum cupidatat enim dolor. Proident do sint deserunt magna laboris in cillum adipisicing sunt et dolor ullamco ex. Cillum sit incididunt cillum et esse ut culpa qui nulla voluptate ut fugiat. Nostrud nisi eu dolor laboris anim qui ea anim voluptate. Ut occaecat aliquip nulla amet est et ut pariatur tempor.
            </p>
          </div>

        </div>

        </div>
      </div>


      <div className="homepage__div-about">
        <div className="homepage__div-about-container">

          <div className="homepage_div-about-info">
            <div className="homepage_div-about-info-container">
              <div className="homepage_div-about-title">
                <h1>About GTVR staff</h1>
                <h4>why make the program, James background etc</h4>
              </div>
              <div className="homepage_div-about-content">
                <p>Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis lab</p>
                <p>Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis lab</p>
              </div>
              <div className="homepage_div-about-button">
                <NavLink to="/about" className="homepage_div-about-button-link">temp button</NavLink>
              </div>
            
            </div>
          
            <div className="homepage_div-about-image">
              <iframe src="https://player.vimeo.com/video/315917058?app=1&amp;background=1&amp;autoplay=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0" frameBorder="0" allowFullScreen=""></iframe>
            </div>

          </div>
          
        </div>
      </div>

      
      <div className="homepage__div-demo">
        <div className="homepage__div-demo-container">

          <div className="homepage_div-demo-info">
            <div className="homepage_div-demo-info-container">

              <div className="homepage_div-demo-title">
                <h1>Demo of the program</h1>
              </div>
              <div className="homepage_div-demo-content">
                <p>Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis lab</p>
                <p>Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis lab</p>
              </div>
  
            </div>
          </div>

          <div className="homepage_div-demo-image">
            <div className="homepage__div-demo-image-container">
              <iframe src="https://player.vimeo.com/video/315917058?app=1&amp;background=1&amp;autoplay=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0" frameBorder="0" allowFullScreen=""></iframe>
            </div>
          </div>
          
        </div>
      </div>



      <div className="homepage__div-testimonial">
        <div className="homepage__div-testimonial-container">
          <p>testimonaisl and other info</p>
        </div>
      </div>    


      <div className="homepage__div-blog">
        <div className="homepage__div-blog-container">
          <p>Info from James</p>
        </div>
      </div>  


        

    </div>
  )
}

export default Home

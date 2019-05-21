import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Lottie from 'react-lottie';
import ScrollAnimation from 'react-animate-on-scroll';

import Hero from './Hero'
import SimpleSlider from '../layout/Carousel'

// lotties animations
import chevronright from '../layout/animations/chevronright.json'
import book from '../layout/animations/book.json'
import vrmonster from '../layout/animations/vrmonster.json'

const Home = props => {

  const handleMouseEnter = (e) => {
    e.target.classList.add('animated', 'shake')
  }

  const handleMouseLeave = (e) => {
    e.target.classList.remove('animated', 'shake')
  }

  return (
    <div className="homepage__div-Area">

      <Hero />

      <div className="homepage__div-main" >  
        <div className="homepage__div-main-container">

          <div className="homepage__div-main-image">

            <ScrollAnimation animateIn="bounceInUp homepage__div-main-image-container" animateOnce={true} delay={0}>
              <img src={"https://unsplash.it/2000/1050"} style={{ backgroundColor: 'black', height: '25rem', width: '20rem'}}></img>
              <h3>about </h3>
              <p>Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="bounceInUp homepage__div-main-image-container" animateOnce={true} delay={200}>
              <img src={"https://unsplash.it/2000/1057"}  style={{ backgroundColor: 'black', height: '25rem', width: '20rem'}}></img>
              <h3>demo</h3>
              <p>DDolor amet dolore magna ipsum. Ipsum do occaecat adipisicingem0</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="bounceInUp homepage__div-main-image-container" animateOnce={true} delay={400}>
              <img src={"https://unsplash.it/2000/1051"} style={{ backgroundColor: 'black', height: '25rem', width: '20rem'}}></img>
              <h3>blog </h3>
              <p>Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="bounceInUp homepage__div-main-image-container" animateOnce={true} delay={600}>
              <img src={"https://unsplash.it/2000/1052"} style={{ backgroundColor: 'black', height: '25rem', width: '20rem'}}></img>
              <h3>Testimonials </h3>
              <p>Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing</p>
            </ScrollAnimation>
          </div>

           
            <div className="homepage__div-main-info">
             
              <div className="homepage__div-main-title">
                <ScrollAnimation animateIn="fadeInLeftBig" animateOnce={true} delay={100} offset={800}>
                  <div className="homepage__div-main-title-inner">
                    <h1 className="">What is Great Teacher VR</h1>
                  </div>
                </ScrollAnimation>
              </div>
              
              <div className="homepage__div-main-content">
                <ScrollAnimation animateIn="fadeInLeftBig" animateOnce={true} delay={300}  offset={500}>
                <p>
                  Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis laborum cupidatat enim dolor. Proident do sint deserunt magna laboris in cillum adipisicing sunt et dolor ullamco ex. Cillum sit incididunt cillum et esse ut culpa qui nulla voluptate ut fugiat. Nostrud nisi eu dolor laboris anim qui ea anim voluptate. Ut occaecat aliquip nulla amet est et ut pariatur tempor.
                </p>
                <p>
                  Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis laborum cupidatat enim dolor. Proident do sint deserunt magna laboris in cillum adipisicing sunt et dolor ullamco ex. Cillum sit incididunt cillum et esse ut culpa qui nulla voluptate ut fugiat. Nostrud nisi eu dolor laboris anim qui ea anim voluptate. Ut occaecat aliquip nulla amet est et ut pariatur tempor.
                </p>
                </ScrollAnimation>
              </div>
              
            </div>
          
        
        </div>
      </div>

      <ScrollAnimation animateIn="flipInX" animateOnce={true} delay={1000}  offset={500}>
      <div className="homepage__div-animations">
        <div>
          <Lottie 
            options={{
              loop: true,
              autoplay: true, 
              animationData: book,
            }}
            height={300}
            width={300} 
          />
        </div>
        <div>
          <Lottie 
            options={{
              loop: true,
              autoplay: true, 
              animationData: chevronright,
            }}
            height={300}
            width={300} 
          />
        </div>
        <div>
          <Lottie 
            options={{
              loop: true,
              autoplay: true, 
              animationData: vrmonster,
            }}
            height={300}
            width={300} 
          />
        </div>
        </div>
        </ScrollAnimation>

      <div className="homepage__div-about">
        <div className="homepage__div-about-container">

          <div className="homepage_div-about-info">
          {/* <ScrollAnimation animateIn="fadeInLeftBig" animateOnce='true'offset="500"> */}
            <div className="homepage_div-about-info-container">
            
              <div className="homepage_div-about-title">
                <h1>About GTVR staff</h1>
                <h3>why make the program, James background etc</h3>
              </div>
              <div className="homepage_div-about-content">
                <p>Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis lab</p>
                <p>Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis lab</p>
              </div>
              <div className="homepage_div-about-button">
                <NavLink to="/about" 
                  className="homepage_div-button-link" 
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}>
                    Find out more
                </NavLink>
              </div>
              
            </div>
          
            <div className="homepage_div-about-image">
              <iframe src="https://player.vimeo.com/video/315917058?app=1&amp;background=1&amp;autoplay=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0" frameBorder="0" allowFullScreen=""></iframe>
            </div>

          {/* </ScrollAnimation> */}
          </div>
          
        </div>
      </div>
      
      <div className="homepage__div-demo">
        <div className="homepage__div-demo-container">

          <div className="homepage_div-demo-info">
            <div className="homepage_div-demo-info-container">
            <ScrollAnimation animateIn="slideInLeft" animateOnce={true} offset={500}>
              <div className="homepage_div-demo-title">
                <h1>Demo of the program</h1>
              </div>
              <div className="homepage_div-demo-content">
                <p>Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis lab</p>
                <p>Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis lab</p>
              </div>
            </ScrollAnimation>
            </div>
          </div>

          <div className="homepage_div-demo-image">
          <ScrollAnimation animateIn="slideInRight" animateOnce={true} offset={800}>
            <div className="homepage__div-demo-image-container">
              <iframe src="https://player.vimeo.com/video/315917058?app=1&amp;background=1&amp;autoplay=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0" frameBorder="0" allowFullScreen=""></iframe>
            </div>
            </ScrollAnimation>
          </div>
          
        </div>
      </div>



      <div className="homepage__div-testimonial">
        <div className="homepage__div-testimonial-container">
        <ScrollAnimation animateIn="slideInRight" animateOnce={true} offset={800}>
          <SimpleSlider />
        </ScrollAnimation>
        </div>
      </div>    


      <div className="homepage__div-blog">
        <div className="homepage__div-blog-container">
          <div className="homepage_div-blog-info">
            <div className="homepage_div-blog-info-container">
              <div className="homepage_div-blog-title">
                <h1>Blog style thing</h1>
                <h4>Created with the lastest research</h4>
              </div>
              <div className="homepage_div-about-content">
                <p>Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis lab</p>
                <p>Dolor amet dolore magna ipsum. Ipsum do occaecat adipisicing dolor minim tempor consequat dolore est duis lab</p>
              </div>
              <div className="homepage_div-blog-button">
                <NavLink to="/blog"                   
                  className="homepage_div-button-link" 
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}>
                    Find out more
                </NavLink>
              </div>
            
            </div>
          </div>

          <div className="homepage_div-blog-image">
            <img src={"https://unsplash.it/2000/1057"}></img>
          </div>

          
        </div>
      </div>  


        

    </div>
  )
}

export default Home

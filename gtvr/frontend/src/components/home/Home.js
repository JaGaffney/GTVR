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

  return (
    <div className="homepage__div-Area">
      <Hero />

      <div className="homepage__div-main" >  
        <div className="homepage__div-main-container">

          <div className="homepage__div-main-image">

            <ScrollAnimation animateIn="bounceInUp homepage__div-main-image-container" animateOnce={true} delay={0}>
              <img src={"https://unsplash.it/2000/1050"} style={{ backgroundColor: 'black', height: '25rem', width: '20rem'}}></img>
              <h3>about </h3>
              <p>Us.</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="bounceInUp homepage__div-main-image-container" animateOnce={true} delay={200}>
              <img src={"https://unsplash.it/2000/1057"}  style={{ backgroundColor: 'black', height: '25rem', width: '20rem'}}></img>
              <h3>demo</h3>
              <p>A live action demo of what Teacher VR offers.</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="bounceInUp homepage__div-main-image-container" animateOnce={true} delay={400}>
              <img src={"https://unsplash.it/2000/1051"} style={{ backgroundColor: 'black', height: '25rem', width: '20rem'}}></img>
              <h3>Research </h3>
              <p>VR teaching impacts on student development.</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="bounceInUp homepage__div-main-image-container" animateOnce={true} delay={600}>
              <img src={"https://unsplash.it/2000/1052"} style={{ backgroundColor: 'black', height: '25rem', width: '20rem'}}></img>
              <h3>Testimonials</h3>
              <p>See what people are saying about us.</p>
            </ScrollAnimation>
          </div>

           
            <div className="homepage__div-main-info">
             
              <div className="homepage__div-main-title">
                <ScrollAnimation animateIn="fadeInLeftBig" animateOnce={true} offset={800}>
                  <div className="homepage__div-main-title-inner">
                    <h1 className="">What is Teacher VR</h1>
                  </div>
                </ScrollAnimation>
              </div>
              
              <div className="homepage__div-main-content">
                <ScrollAnimation animateIn="fadeInLeftBig" animateOnce={true} delay={400}  offset={800}>
                <p>
                  Teacher VR brings teaching to the 21st century by integrating Virtual Reality teaching without losing control of the lesson. 
                  Teacher VR allows for creation of video lesson plans with a simple click of a button and allows students of all ages and 
                  computer literacy the ability to not be left behind.
                </p>
                <p>
                  Teacher VR was designed to solve the real world issue of teachers being unable to teacher a VR lesson where all students are in sync with each other. Teacher VR solves
                  this issue by allowing the teacher to have full control on when, where and how the Virtual reality experience flows.
                  Teacher VR has been developed with the latest website technology created by Facebook and can either be incorporated into your existing website or you can use the Teacher VR domain.
                </p>
                </ScrollAnimation>
              </div>
              
            </div>
          
        
        </div>
      </div>

      {/* <ScrollAnimation animateIn="flipInX" animateOnce={true} offset={800}>
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
      </ScrollAnimation> */}

      <div className="homepage__div-about">
        <div className="homepage__div-about-container">

          <ScrollAnimation className="homepage_div-about-info" animateIn="fadeInLeftBig" animateOnce={true} offset={800}>
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
                  className="homepage_div-button-link">
                    Find out more
                </NavLink>
              </div> 
            </div>
          </ScrollAnimation>

          <ScrollAnimation className="homepage_div-about-empty" animateIn="fadeInLeftBig" animateOnce={true} offset={800}></ScrollAnimation>

          <ScrollAnimation className="homepage_div-about-image" animateIn="fadeInLeftBig" animateOnce={true} offset={800} delay={100}>
            <div className="homepage_div-about-image-container">
              <img src={'./static/frontend/img/vrgrass.jpg'}></img>
            </div>
          </ScrollAnimation>

        </div>
      </div>
      
      <div className="homepage__div-demo">
        <div className="homepage__div-demo-container">

          <div className="homepage_div-demo-info">
            <ScrollAnimation animateIn="slideInLeft" animateOnce={true} offset={500} className="homepage_div-demo-info-container">
              <div className="homepage_div-demo-title">
                <h1>Live Demo</h1>
              </div>
              <div className="homepage_div-demo-content">
                <p>Feel free to use the online demo, you can add, delete, update and use a lite version of Teacher VR.</p>
                <p>Or you can check out the video of Teacher VR in action.</p>
              </div>
              <div className="homepage_div-demo-button">
                <NavLink to="/subjects" 
                  className="homepage_div-button-link">
                    Find out more
                </NavLink>
              </div> 
            </ScrollAnimation>
          </div>

          <ScrollAnimation animateIn="slideInRight" animateOnce={true} offset={800}  className="homepage_div-demo-image">
            <div className="homepage__div-demo-image-container">
              <iframe src="https://player.vimeo.com/video/315917058?app=1&amp;background=1&amp;autoplay=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0" frameBorder="0" allowFullScreen=""></iframe>
            </div>
          </ScrollAnimation>
          
        </div>
      </div>



      <div className="homepage__div-testimonial">
        <ScrollAnimation className="homepage__div-testimonial-container" animateIn="slideInRight" animateOnce={true} offset={800}>
          <SimpleSlider />
        </ScrollAnimation>
      </div>    


      <div className="homepage__div-blog">
        <div className="homepage__div-blog-container">
          <ScrollAnimation className="homepage_div-blog-info" animateIn="slideInLeft" animateOnce={true} offset={800}>
            <div className="homepage_div-blog-info-container">
              <div className="homepage_div-blog-title">
                <h1>Blog</h1>
                <h4>Created with the lastest teaching research</h4>
              </div>
              <div className="homepage_div-blog-content">
                <p>Master's thesis link potentially</p>
                <p>Other random snippets or the Abstract</p>
                <p>In excepteur proident pariatur sunt ullamco.</p>
              </div>
              <div className="homepage_div-blog-button">
                <NavLink to="/blog"                   
                  className="homepage_div-button-link">
                    Find out more
                </NavLink>
              </div>
            
            </div>
          </ScrollAnimation>

          <ScrollAnimation className="homepage_div-blog-image" animateIn="slideInUp" animateOnce={true} offset={800}>
            <img src={"https://unsplash.it/2000/1057"}></img>
          </ScrollAnimation>

        </div>
      </div>  

    </div>
  )
}

export default Home

import React, { Component } from 'react'

import About from '../common/About'
import Case from './common/Case'
//import Contact from './common/Contact'


export class Home extends Component {
  render() {
    return (
      <div className="homepage__div-Area">

        <div className="homepage__div-info">

        <div className="homepage__div-title">
          <h1>Homepage</h1>
        </div>
        
        <div className="homepage__div-info">
          <p>give it a landing page type of feel and look</p>
        </div>

        <div className="homepage__div-image">
          <p>Picture about it</p>
        </div>

        </div>

        <About />

        <Case />

      </div>
    )
  }
}

export default Home

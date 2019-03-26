import React, { Component } from 'react'

import About from '../common/About'
import LessonDashnoard from '../lessons/LessonDashboard'

export class Home extends Component {
  render() {
    return (
      <div className="homepage__div-Area">

        <div className="homepage__div-info">
          <h1>Homepage</h1>
          <p>give it a landing page type of feel and look</p>
        </div>

        <About />

        <LessonDashnoard />
      </div>
    )
  }
}

export default Home

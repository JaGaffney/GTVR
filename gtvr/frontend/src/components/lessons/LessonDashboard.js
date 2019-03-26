import React, { Component } from 'react'

import Lessons from './Lessons'

export class LessonDashboard extends Component {
  render() {
    return (
      <div className="lessonDashboard__div-Area">
        <div className="lessonDashboard__div">
          <Lessons />
        </div>
      </div>
    )
  }
}

export default LessonDashboard

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLessons } from '../../actions/lessons'

import Lessons from './Lessons'

export class LessonDashboard extends Component {
    static propTypes = {
        lessons: PropTypes.array.isRequired
        // getJobs: PropTypes.func.isRequired,
    }

    state = {
        loadSingle: false,
        lessonData: "",
    }


    componentDidMount(){
        this.props.getLessons();
    }


    // Single page component handlering
    loadLesson = (lesson) => {
        this.setState({
            loadSingle: true,
            lessonData: lesson
        })
    }

    // closes down the single page component
    onLessonPageHandler = () => {
        this.setState({
            loadSingle: false
        })
    }

    tableGenerator(){
      if (this.props.lessons.length >= 1){
        return (
          <>
            { this.props.lessons.map(lesson => (
              <div className="lessonDashboard__card" onClick={this.loadLesson.bind(this, lesson)} key={lesson['id']}>
                <div className="lessonDashboard__card-container">
                  <div className="temp-div-img"></div>
                  <h4><strong>Name: </strong>{lesson['name']}</h4>
                  <h4><strong>Subject: </strong>{lesson['subject']}</h4>
                  <h4><strong>Teacher: </strong>Alicia</h4>
                  <p>Total Videos: {lesson['videos'].length}</p>
                </div>
              </div>
            ))}
          </>
        ) 
      }
    }

    render() {

        return (
            <div className="lessonDashboard__div-Area">
              <div className="lessonDashboard__div">
                <br></br>
                <div className="lessonDashboard__div-container">
                  {(this.state.loadSingle && <Lessons lessonInfo={this.state.lessonData} /> )}
                  {(!this.state.loadSingle && this.tableGenerator() )}
                </div>
              </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    lessons: state.lessons.lessons
})


export default connect(mapStateToProps, { getLessons } )(LessonDashboard)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLessons, deleteLesson } from '../../actions/lessons'

import Lessons from './Lessons'
import LessonForm from './LessonForm'

export class LessonDashboard extends Component {
  static propTypes = {
    lessons: PropTypes.array.isRequired,
    getLessons: PropTypes.func.isRequired,
    deleteLesson: PropTypes.func.isRequired,
  }

  state = {
      loadSingle: false,
      lessonData: "",
      loadForm: false,
  }

  // switches between states for show/add form button
  onFormHandler(){
    this.setState(prevState => {
      const updatedState = prevState
      return {loadForm: !updatedState.loadForm} 
    })
  }

  componentDidMount(){
    this.props.getLessons();
  }

  // Single page component handlering
  loadLesson = (lesson) => {
    this.setState({
        loadSingle: true,
        lessonData: lesson,
        loadForm: false
    })
  }

  // closes down the single page component
  onLessonPageHandler = () => {
    this.setState({
        loadSingle: false
    })
  }

  onDeleteLesson = (id) => {
    this.props.deleteLesson(id)
    console.log("got here")
  }

  tableGenerator(){
    if (this.props.lessons.length >= 1){
      return (
        <>
          { this.props.lessons.map(lesson => (
            <div className="lessonDashboard__card" key={lesson['id']}>
            <button className="lessonDashboard__card-deleteBtn" onClick={this.onDeleteLesson.bind(this, lesson.id)}><i className="fa fa-close"></i></button>
              <div className="lessonDashboard__card-container"  onClick={this.loadLesson.bind(this, lesson)}>
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
          {(!this.state.loadSingle && <button className="btn" onClick={this.onFormHandler.bind(this)}>{this.state.loadForm ? 'Hide' : 'Add'} new Lesson</button> )}
          {(this.state.loadForm && <LessonForm /> )}
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

export default connect(mapStateToProps, { getLessons, deleteLesson } )(LessonDashboard)

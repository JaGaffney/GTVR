import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLessons, deleteLesson } from '../../actions/lessons'

import Lessons from './Lessons'
import LessonForm from './LessonForm'

import Backdrop from '../layout/Backdrop'

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
      tempID: 0
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
        loadForm: false,
        tempID: lesson.id
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
  }

  tableGenerator(){
    if (this.props.lessons.length >= 1){
      return (
        <>
          { this.props.lessons.map(lesson => (
            <div className="lessonDashboard__card" key={lesson['id']}>

            <button className="lessonDashboard__card-deleteBtn" onClick={this.onDeleteLesson.bind(this, lesson.id)}><i className="fa fa-trash"></i></button>
            <br></br>
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
      <>

      <div className="lessonDashboard__div-Area">

      {( this.state.loadForm && <Backdrop formHandler={this.onFormHandler.bind(this)} /> )}
      {( this.state.loadForm && <LessonForm formHandler={this.onFormHandler.bind(this)} /> )}

        <div className="lessonDashboard__div">
          <br></br>
          {(!this.state.loadSingle && <button className="btn" onClick={this.onFormHandler.bind(this)}>{this.state.loadForm ? 'Hide' : 'Add'} new Lesson</button> )}
          
          
          <div className="lessonDashboard__div-container">
            {(this.state.loadSingle && <Lessons lessonInfo={this.state.lessonData} lessonID={this.state.tempID} /> )}
            {(!this.state.loadSingle && this.tableGenerator() )}
          </div>
        </div>
      </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
    lessons: state.lessons.lessons
})

export default connect(mapStateToProps, { getLessons, deleteLesson } )(LessonDashboard)

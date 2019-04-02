import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteVideo, getLessons } from '../../actions/lessons'

import YouTube from 'react-youtube';

import LessonSingle from './LessonSingle'
import LessonVideoForm from './LessonVideoForm'

import Backdrop from '../layout/Backdrop'

export class Lessons extends Component {

  static propTypes = {
    deleteVideo: PropTypes.func.isRequired,
    getLessons: PropTypes.func.isRequired
  }

  state = {
    loadSingle: false,
    videoData: "",
    loadForm: false,
  }

  // switches between states for show/add form button
  onFormHandler(){
    this.setState(prevState => {
      const updatedState = prevState
      return {loadForm: !updatedState.loadForm} 
    })
  }

  // Single page component handlering
  loadSingleLesson = (video) => {
    this.setState({
        loadSingle: true,
        videoData: video
    })
  }

  onDeleteVideo = (id) => {
    this.props.deleteVideo(id)
    this.props.getLessons()
  }

  lessonGeneration(video){
    const opts = {
      height: '120',
      width: '213',
      playerVars: {
        autoplay: 0,
        controls: 0,
        modestbranding: 1

      }
    }
    return (
      <div className="lessonLesson__card" key={video.id}>
        <button className="lessonDashboard__card-deleteBtn" onClick={this.onDeleteVideo.bind(this, video.id)}><i className="fa fa-trash"></i></button>
        <br></br>
        <div className="lessonLesson__card-container" onClick={this.loadSingleLesson.bind(this, video)}>
          <div className="temp-div-youtube">
            <YouTube 
              videoId={video.link}
              opts={opts}
            />
          </div>
          <h4><strong>Lesson Number: </strong>{video.id}</h4>
          <h4><strong>Video Title: </strong>{video.title}</h4>
        </div>
      </div>
    )
  }

  render() {
    let lessons = this.props.lessons.filter(item => item.id === this.props.lessonID);

    let LessonsPage = <div>
      <h1>Lesson: {lessons[0].name}</h1>
      <h2>Teacher: Alicia</h2>
      <h2>Subject: {lessons[0].subject}</h2>
      <button className="btn" onClick={this.onFormHandler.bind(this)}>{this.state.loadForm ? 'Hide' : 'Add'} new Video</button>
      <div className="lessonLesson__div-container">
        { lessons[0].videos.map(lesson => (
          this.lessonGeneration(lesson)
        ))}
      </div>
    </div>

    return (
      <>
      {( this.state.loadForm && <Backdrop formHandler={this.onFormHandler.bind(this)} /> )}
      {( this.state.loadForm && <LessonVideoForm lessonId={this.props.lessonInfo.id} formHandler={this.onFormHandler.bind(this)} /> )}
      <br></br>

      {(!this.state.loadSingle && LessonsPage )}
      {(this.state.loadSingle && <LessonSingle videoInfo={this.state.videoData} lessonInfo={this.props.lessonInfo.id} /> )}

      </>
    )
  }
}

const mapStateToProps = state => ({
  lessons: state.lessons.lessons
})

export default connect(mapStateToProps, { getLessons, deleteVideo } )(Lessons)


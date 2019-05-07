import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteVideo, getLessons } from '../../actions/lessons'

import YouTube from 'react-youtube';

import LessonSingle from './LessonSingle'
import LessonVideoForm from './LessonVideoForm'

import Backdrop from '../layout/Backdrop'

const Lessons = props => {

  const propTypes = {
    deleteVideo: PropTypes.func.isRequired,
    getLessons: PropTypes.func.isRequired
  }
  
  const [loadSingle, setLoadSingle] = useState(false);
  const [videoData, setVideoData] = useState("");
  const [loadForm, setLoadForm] = useState(false);

  // switches between states for show/add form button
  const onFormHandler = () => {
    setLoadForm(!loadForm)
  }

  // Single page component handlering
  const loadSingleLesson = (video) => {
    setLoadSingle(true)
    setVideoData(video)
  }

  const onDeleteVideo = (id) => {
    props.deleteVideo(id)
    props.getLessons()
  }

  const lessonGeneration = (video) => {
    if (video.title === ""){
      return
    }
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
        <button className="lessonDashboard__card-deleteBtn" onClick={onDeleteVideo.bind(null, video.id)}>&times;</button>
        <br></br>
        <div className="lessonLesson__card-container" onClick={loadSingleLesson.bind(null, video)}>
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

    let lessons = props.lessons.filter(item => item.id === props.lessonID);
    let LessonsPage = <div>
      <h1>Lesson: {lessons[0].name}</h1>
      <h2>Teacher: {props.teacherName}</h2>
      <h2>Subject: {lessons[0].subject}</h2>
      <button className="btn" onClick={onFormHandler.bind(this)}>{loadForm ? 'Hide' : 'Add'} new Video</button>
      <div className="lessonLesson__div-container">
        { lessons[0].videos.map(lesson => (
          lessonGeneration(lesson)
        ))}
      </div>
    </div>

  return (
    <>
    <h1>Lessonss.js</h1>
    {( loadForm && <Backdrop formHandler={onFormHandler.bind(this)} /> )}
    {( loadForm && <LessonVideoForm lessonId={props.lessonInfo.id} formHandler={onFormHandler.bind(this)} /> )}
    <br></br>

    {(!loadSingle && LessonsPage )}
    {(loadSingle && <LessonSingle videoInfo={videoData} lessonInfo={props.lessonInfo.id} /> )}

    </>
  )
}

const mapStateToProps = state => ({
  lessons: state.lessons.lessons,
  subjects: state.lessons.subjects
})

export default connect(mapStateToProps, { getLessons, deleteVideo } )(Lessons)


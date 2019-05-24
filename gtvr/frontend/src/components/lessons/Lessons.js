import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import YouTube from 'react-youtube';

import { deleteVideo, getSubjects, addSubjectInfo } from '../../actions/lessons'
import LessonSingle from './LessonSingle'

const Lessons = props => {

  const [loadSingle, setLoadSingle] = useState(false);
  const [videoData, setVideoData] = useState("");
  const [loadForm, setLoadForm] = useState(false);

  useEffect(() => {
    props.getSubjects();
  }, []);


  // switches between states for show/add form button
  const onFormHandler = () => {
    setLoadForm(!loadForm)
  }

  // Single page component handlering
  const loadSingleLesson = (video) => {
    setLoadSingle(true)
    setVideoData(video)
    console.log(props.subjectInfo)
    props.addSubjectInfo({subject: props.subjectInfo.subject,
                          subjectID: props.subjectInfo.subjectID, 
                          lesson: props.subjectInfo.lesson, 
                          lessonID: props.subjectInfo.lessonID, 
                          video: video.title,
                          videoID: video.id,
    })
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
    let LessonsPage = <div className="lessonLesson__div-container">
        { lessons[0].videos.map(lesson => (
          lessonGeneration(lesson)
        ))}
      </div>

  return (
    <>

    {(!loadSingle && LessonsPage )}
    {(loadSingle && <LessonSingle videoInfo={videoData} lessonInfo={props.lessonInfo.id} /> )}

    </>
  )
}

const mapStateToProps = state => ({
  lessons: state.lessons.lessons,
  subjects: state.lessons.subjects,
  subjectInfo: state.lessons.subjectInfo
})

export default connect(mapStateToProps, { getSubjects, deleteVideo, addSubjectInfo } )(Lessons)


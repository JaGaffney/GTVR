import React, { Component } from 'react'
import YouTube from 'react-youtube';

import LessonSingle from './LessonSingle'

export class Lessons extends Component {
  state = {
    loadSingle: false,
    videoData: "",
  }

  // Single page component handlering
  loadSingleLesson = (video) => {
    this.setState({
        loadSingle: true,
        videoData: video
    })
  }

  lessonGeneration(video){
    const opts = {
      height: '120',
      width: '213',
    }

    return (
      <div className="lessonLesson__card" key={video.id} onClick={this.loadSingleLesson.bind(this, video)}>
        <div className="lessonLesson__card-container">
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

    let LessonsPage = <div>
      <h1>Lesson: {this.props.lessonInfo.name}</h1>
      <h2>Teacher: Alicia</h2>
      <h2>Subject: {this.props.lessonInfo.subject}</h2>
      <div className="lessonLesson__div-container">
        { this.props.lessonInfo.videos.map(lesson => (
          this.lessonGeneration(lesson)
        ))}
      </div>
    </div>

    return (
      <>
      {(this.state.loadSingle && <LessonSingle videoInfo={this.state.videoData} lessonInfo={this.props.lessonInfo.id} /> )}

      {(!this.state.loadSingle && LessonsPage )}
      </>
    )
  }
}

export default Lessons

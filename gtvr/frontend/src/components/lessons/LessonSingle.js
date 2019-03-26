import React, { Component } from 'react'

export class LessonSingle extends Component {

  lessonGeneration(video){
    console.log(video)
    return (
      <div className="LessonSingle__video-card">
      <p>ID number: {video.id}</p>
      <p>Video Title: {video.title}</p>
      <p>Video Link: <iframe width="170" height="95" src={`https://www.youtube.com/embed/${video.link}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></p>
      </div>
      
    )
  }

  render() {
    console.log(this.props.lessonInfo)

    return (
      <div>
        <h1>{this.props.lessonInfo.name}</h1>
        <h2>Teacher name:</h2>
        <h2>{this.props.lessonInfo.subject}</h2>
        { this.props.lessonInfo.videos.map(lesson => (
          this.lessonGeneration(lesson)
        ))}

        <p></p>
      </div>
    )
  }
}

export default LessonSingle

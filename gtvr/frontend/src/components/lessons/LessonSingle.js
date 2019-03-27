import React, { Component } from 'react'
import YouTube from 'react-youtube';

export class LessonSingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: null,
      player: null
    }

    this.onReady = this.onReady.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
  }


  onPlayVideo() {
    this.state.player.playVideo();
  }

  onPauseVideo() {
    this.state.player.pauseVideo();
  }

  onReady(event) {
    console.log(event); 
    this.setState({
      player: event.target,
    });
  }


  lessonGeneration(video){
    const opts = {
      height: '150',
      width: '220',
      }
    return (
      <div className="LessonSingle__video-card">
      <p>ID number: {video.id}</p>
      <p>Video Title: {video.title}</p>
      <p>
      <YouTube 
        videoId={video.link}
        opts={opts}
        onReady={this.onReady}
      />
      </p>
      </div>
      
    )
  }

  render() {

    return (
      <div>
        <h1>{this.props.lessonInfo.name}</h1>
        <h2>Teacher name:</h2>
        <h2>{this.props.lessonInfo.subject}</h2>
        { this.props.lessonInfo.videos.map(lesson => (
          this.lessonGeneration(lesson)
        ))}
        <button onClick={this.onPlayVideo}>Play</button>
        <button onClick={this.onPauseVideo}>Pause</button>
        <p></p>
      </div>
    )
  }
}

export default LessonSingle

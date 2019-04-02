import React, { Component } from 'react'
import YouTube from 'react-youtube';

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getVideo, updateVideo } from '../../actions/lessons'

// Issues
// 1. If video is already playing on load it will crash due to not player existing yet
// 2. Pause,Play/stop dont work yet as they dont send requets to api

export class LessonSingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: null,
      player: null,
      play: false,
      playingVideo: false,
      pausedVideo: false
    }

    this.onReady = this.onReady.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
    this.onStopVideo = this.onStopVideo.bind(this);
    this.onFullScreen = this.onFullScreen.bind(this);
    this.onPlayButtonHandler = this.onPlayButtonHandler.bind(this);
  }

  componentWillMount(){
    this.setState({
      videoId: this.props.videoInfo.link
    })
  }

  componentDidMount(){
    // need to look into using sockets
    this.timer = setInterval( () => {
      
    if (Object.keys(this.props.video).length > 0){
      this.setState({
        play: this.props.video.play
      })
    }
    this.props.getVideo(this.props.videoInfo.id), 10000
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  onPlayVideo() {
    // stops repitition of playing video
    if (!this.state.playingVideo){
      setTimeout(() => {
        this.state.player.playVideo();
      }, 4000);
      
      console.log("got here onPlayVideo")
      this.setState({
        playingVideo: true,
        pausedVideo: false
      });
    }
  }

  onPauseVideo() {
    this.state.player.pauseVideo();
    this.setState({
      playingVideo: false,
      pausedVideo: true
    });
  }

  onStopVideo() {
    const playInfo = { play: false }
    this.props.updateVideo(this.props.videoInfo.id, playInfo)
    this.state.player.stopVideo();
  }

  onReady(event) {
    this.setState({
      player: event.target,
    });
  }

  onFullScreen(){
    console.log(this.state.player)
  }

  onPlayButtonHandler(){
    this.setState({ 
      playingVideo: false 
    })
    const playInfo = { play: true }
    this.props.updateVideo(this.props.videoInfo.id, playInfo)
    this.onPlayVideo()
  }

  render() {
    const opts = {
      height: '720',
      width: '1280',
    }

    if (this.state.play){
      this.onPlayVideo()
    }

    return (
      <div>
        <h1>{this.props.videoInfo.title}</h1>
        <div className="LessonSingle__video-controls">
          <button onClick={this.onPlayButtonHandler}>Play</button>
          <button onClick={this.onPauseVideo}>Pause</button>
          <button onClick={this.onStopVideo}>Stop</button>
          <button onClick={this.onFullScreen}>Fullscreen</button>
        </div>
        <div className="LessonSingle__video-card">
          <YouTube 
            videoId={this.state.videoId}
            opts={opts}
            onReady={this.onReady}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  video: state.lessons.video
})

export default connect(mapStateToProps, { getVideo, updateVideo } )(LessonSingle)

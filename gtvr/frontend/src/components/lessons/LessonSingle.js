import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getVideo, updateVideo } from '../../actions/lessons'

// Issues
// 1. If video is already playing on load it will crash due to not player existing yet
// 2. Pause,Play/stop dont work yet as they dont send requets to api

const LessonSingle = props => {

  const [videoIDCode, setVideoID] = useState(null)
  const [player, setPlayer] = useState(null)
  const [play, setPlay] = useState(false)
  const [playingVideo, setPlayingVideo] = useState(false)
  const [pausedVideo, setPausedVideo] = useState(false)

  useEffect(() => {
    setVideoID(props.videoInfo.link)
    console.log("here")
  }, [])
  // componentWillMount(){
  //   this.setState({
  //     videoId: this.props.videoInfo.link
  //   })
  // }

  useEffect(() => {
    let timer = setInterval( () => {
      if (Object.keys(props.video).length > 0){
        setPlay(props.video.play)
      }
      //props.getVideo(props.videoInfo.id), 10000
    });
    return () => {
      clearInterval(timer);
      timer = null;
    }
  }, [])

  const onPlayVideo = () => {
    // stops repitition of playing video
    if (!playingVideo){
      setTimeout(() => {
        player.playVideo();
      }, 4000);
      
      console.log("got here onPlayVideo")
      setPlayingVideo(true)
      setPausedVideo(false)
    }
  }

  const onPauseVideo = () => {
    player.pauseVideo();
    setPlayingVideo(false)
    setPausedVideo(true)
  }

  const onStopVideo = () => {
    const playInfo = { play: false }
    props.updateVideo(props.videoInfo.id, playInfo)
    player.stopVideo();
  }

  const onReady = (event) => {
    setPlayer(event.target)
  }

  const onFullScreen = () => {
    console.log("Coming soon")
  }

  const onPlayButtonHandler = () => {
    setPlayingVideo(false)

    const playInfo = { play: true }
    props.updateVideo(props.videoInfo.id, playInfo)
    onPlayVideo()
  }

  const opts = {
    height: '720',
    width: '1280',
  }

  if (play){
    onPlayVideo()
  }

  return (
    <div>
      <h1>{props.videoInfo.title}</h1>
      <div className="LessonSingle__video-controls">
        <button onClick={onPlayButtonHandler}>Play</button>
        <button onClick={onPauseVideo}>Pause</button>
        <button onClick={onStopVideo}>Stop</button>
        <button onClick={onFullScreen}>Fullscreen</button>
      </div>
      <div className="LessonSingle__video-card">
        <YouTube 
          videoId={videoIDCode}
          opts={opts}
          onReady={onReady}
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  video: state.lessons.video
})

export default connect(mapStateToProps, { getVideo, updateVideo } )(LessonSingle)

import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube';

import { getVideo, updateVideo } from '../../actions/lessons'

// interval module hook
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const LessonSingle = props => {

  const [videoIDCode, setVideoID] = useState(null)
  const [player, setPlayer] = useState(null)
  const [playerReady, setPlayerReady] = useState(false)
  const [playButton, setPlayButton] = useState(true)

  useEffect(() => {
    setVideoID(props.videoInfo.link)
    props.getVideo(props.videoInfo.id)
    return () => {
      console.log("Cleaning up...")

      // api settings
      const playInfo = { play: false, stopped: true, paused: false }
      props.updateVideo(props.videoInfo.id, playInfo)
    }
  }, [])

  useInterval(() => {
    // calls the server to see if there is any differences
    props.getVideo(props.videoInfo.id);

    // NOTE: for some reason need to press it twice to get it to work or refresh needs ot be set for really quick

    if (props.video.play) {
      //console.log('interval onPlayVideo')
      player.playVideo();

    } else if (props.video.paused) {
      //console.log('interval onPauseVideo')
      player.pauseVideo();

    // stops onload Errors due to player not existing yet
    } else if (props.video.stopped && playerReady) {
      //console.log('interval onStopVideo')
      // browser settings
      player.stopVideo();
    }

  }, 500);

  const onPlayVideo = () => {
    setPlayButton(false)
    player.playVideo();

    // api settings
    const playInfo = { play: true, stopped: false, paused: false }
    props.updateVideo(props.videoInfo.id, playInfo)
  }

  const onPauseVideo = () => {
    setPlayButton(true)
    player.pauseVideo();

    // api settings
    const playInfo = { play: false, stopped: false, paused: true }
    props.updateVideo(props.videoInfo.id, playInfo)
  }

  const onStopVideo = () => {
    // browser settings
    setPlayButton(true)
    player.stopVideo();

    // api settings
    const playInfo = { play: false, stopped: true, paused: false }
    props.updateVideo(props.videoInfo.id, playInfo)
  }

  const onReady = (event) => {
    setPlayer(event.target)
    // needs a check to make sure player exists before trying to stop
    setPlayerReady(true)
  }

  const onFullScreen = () => {
    console.log("Coming soon")
  }

  const opts = {
    height: '720',
    width: '1280',
  }

  return (
    <div className="LessonSingle__container">
      <div className="LessonSingle__video-card">
        <YouTube 
          videoId={videoIDCode}
          opts={opts}
          onReady={onReady}
        />
      </div>

    <div className="LessonSingle__playlist">
    </div>

    <div className="LessonSingle__info">

      <h1 className="LessonSingle__title">{props.videoInfo.title}</h1>

      <div className="LessonSingle__video-controls">
        {(playButton ? <button onClick={onPlayVideo}><i className="fa fa-play"></i></button> : <button onClick={onPauseVideo}><i className="fa fa-pause"></i></button>)}
        
        <button onClick={onStopVideo}><i className="fa fa-stop"></i></button>
        <button onClick={onFullScreen}><i className="fa fa fa-expand"></i></button>
      </div>   
        
        
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  video: state.lessons.video
})

export default connect(mapStateToProps, { getVideo, updateVideo } )(LessonSingle)

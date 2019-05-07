import React, { useState, useEffect, useRef } from 'react'
import YouTube from 'react-youtube';


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








import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getVideo, updateVideo } from '../../actions/lessons'




// Issues
// 1. If video is already playing on load it will crash due to not player existing yet
// 2. Pause,Play/stop dont work yet as they dont send requets to api

const LessonSingle = props => {

  const [videoIDCode, setVideoID] = useState(null)
  const [player, setPlayer] = useState(null)
  const [playerReady, setPlayerReady] = useState(false)

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

    // NOTE: for some reason need to press it twice to get it to work

    console.log('state different than server')
    if (props.video.play) {
      console.log('interval onPlayVideo')
      player.playVideo();

    } else if (props.video.paused) {
      console.log('interval onPauseVideo')
      player.pauseVideo();

    } else if (props.video.stopped && playerReady) {
      console.log('interval onStopVideo')
      // browser settings
      player.stopVideo();
    }

  }, 500);


  const onPlayVideo = () => {
    player.playVideo();

    // api settings
    const playInfo = { play: true, stopped: false, paused: false }
    props.updateVideo(props.videoInfo.id, playInfo)

    
  }

  const onPauseVideo = () => {
    player.pauseVideo();

    // api settings
    const playInfo = { play: false, stopped: false, paused: true }
    props.updateVideo(props.videoInfo.id, playInfo)


  }

  const onStopVideo = () => {
    // browser settings
    player.stopVideo();

    // api settings
    const playInfo = { play: false, stopped: true, paused: false }
    props.updateVideo(props.videoInfo.id, playInfo)
  }

  const onReady = (event) => {
    setPlayer(event.target)
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
    <div>
      <h1>LessonsSingle.js</h1>
      <h1>{props.videoInfo.title}</h1>
      <div className="LessonSingle__video-controls">
        <button onClick={onPlayVideo}>Play</button>
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

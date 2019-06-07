import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
// import YouTube from 'react-youtube';
import YouTube from '@u-wave/react-youtube';

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
  let initWidth = window.innerWidth / 1.5
  let initHeight = (9 / 16 ) * initWidth

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [videoSize, setVideoSize] = useState({height: initHeight, width: initWidth})

  const aspectRatioCalc = (newWidth) => {
    let aspectWidth = newWidth / 1.5
    let newHeight = (videoSize.height / videoSize.width) * aspectWidth
    setVideoSize({height: newHeight, width: aspectWidth})
    document.querySelector('.LessonSingle__video-card-player').style = `width: ${videoSize.width}px; height: ${videoSize.height}px`;
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      aspectRatioCalc(screenWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  const [videoIDCode, setVideoID] = useState(null)
  const [player, setPlayer] = useState(null)
  const [playerReady, setPlayerReady] = useState(false)
  const [playButton, setPlayButton] = useState(true)
  const [initLoad, setInitLoad] = useState(false)
  const [volume, setActiveVolume] = useState(1)

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
    // event.target.a.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; vr;"
    event.target.a.allow = "accelerometer; autoplay; encrypted-media; gyroscope; vr;"
    setPlayer(event.target)
    // needs a check to make sure player exists before trying to stop
    setPlayerReady(true)
    if (!initLoad){
      setInitLoad(true)
      setTimeout(() => {
        aspectRatioCalc(window.innerWidth)
      }, 2000)
    }
  }


  const onFullScreen = () => {
    document.getElementById('youtubePlayer').requestFullscreen()
  }

  const testHandleClick = () => {
    let test = document.getElementById('youtubePlayer')
    // let test = document.getElementById('widget4').getAttribute("allow")
    // console.log(test)
    player.getApiInterface()
    console.log(player)
    // player.a.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; vr;"
    // console.log(player.a.allow)
  }


  return (
    <div className="LessonSingle__container">

      <div className="LessonSingle__video-card">
        {/* <YouTube 
          videoId={videoIDCode}
          volume={volume}
          controls={false}
          onReady={onReady}
          className="LessonSingle__video-card-player"
          playsInline={true}
          showRelatedVideos={false}
          opts={playerVars: { 
                allowvr: 1
            }
          }
        /> */}
        <YouTube 
          video={videoIDCode}
          volume={volume}
          controls={true}
          onReady={onReady}
          className="LessonSingle__video-card-player"
          playsInline={true}
          showRelatedVideos={false}
          modestBranding={true}
          id="youtubePlayer"
        />
      </div>

      <div className="LessonSingle__title" onClick={testHandleClick}>
        <h1>{props.videoInfo.title}</h1>
      </div>

      <div className={(props.teacherMode ? "LessonSingle__video-controls" : "admin-panel-deactive")}>
        <h3>Teacher control panel</h3>
        <h5>This panel gives you full control on what and when your students are viewing.</h5>
        <div className="LessonSingle__video-controls-buttons">
          {(playButton ? <button onClick={onPlayVideo}><i className="fa fa-play"></i></button> : <button onClick={onPauseVideo}><i className="fa fa-pause"></i></button>)}
          <button onClick={onStopVideo}><i className="fa fa-stop"></i></button>
          <button onClick={onFullScreen}><i className="fa fa fa-expand"></i></button>
        </div>

        <input
          type="range"
          value={volume}
          min={0}
          max={1}
          step={0.01}
          onChange={(event) => setActiveVolume(parseFloat(event.target.value))}
        />

        <a target="_blank" href={`vnd.youtube:${videoIDCode}`}>Launch in App</a>     
      </div>  

    </div>
  )
}

const mapStateToProps = state => ({
  video: state.lessons.video
})

export default connect(mapStateToProps, { getVideo, updateVideo } )(LessonSingle)

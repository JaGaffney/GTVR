import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addVideo, getLessons } from "../../actions/lessons";

const LessonVideoForm = props =>  {

  const propTypes = {
    addVideo: PropTypes.func.isRequired,
    getLessons: PropTypes.func.isRequired
  }

  const [ title, setTitle ] = useState("");
  const [ link, setLink ] = useState("");
  const [ play, setPlay] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // on submit button click
  const onSubmit = e => {
    e.preventDefault()
    console.log(e.target)

    // will need a better filter for extracting the youtube id data
    if (!link.includes('youtube')) {
      console.log("not a youtube link")
      e.target.link.focus()
      return
    } 

    let youtubeLink = link.split('watch?v=')

    setLink(youtubeLink[1])

    console.log(link)

    // creates a valid object that can be sent to the API
    const video = { lesson: props.lessonId, title, link, play }
    props.addVideo(video)
    props.getLessons()

    // resetting data back to default values
    setTitle("");
    setLink("");

    // closes the modal form
    props.formHandler()
  }

  return (
    <>
    <div className="modalForm-div">
      
      <div className="modalForm-container">

      <div className="close-container"  onClick={props.formHandler}>
        <div className="leftright"></div>
        <div className="rightleft"></div>
      </div>

      <h1>Add new Video</h1>
      
        <form onSubmit={onSubmit} autoComplete="off" id="VideoForm">
        
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={e => setTitle(e.target.value) }
              value={title}
              placeholder="Title"
              required 
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="link"
              onChange={e => setLink(e.target.value) }
              value={link}
              placeholder="Youtube Link"
              required 
            />
          </div>

          <div className="form-group">
              <button type="submit" className="btn">Submit</button>
              <button className="btn" onClick={props.formHandler}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}


export default connect(null, { getLessons, addVideo })(LessonVideoForm)

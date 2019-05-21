import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addVideo, getLessons } from "../../actions/lessons";


import useFormValidation from "../utils/useFormValidation";
import validateForm from "../utils/validateForm";

const INITIAL_STATE = {
  title: "",
  link: ""
};

const LessonVideoForm = props =>  {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateForm);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // on submit button click
  const onSubmit = e => {
    e.preventDefault()
    const noErrors = handleSubmit(e)

    // if there an error the submit will fail will need to be tried again
    if (noErrors.link){
      return
    }

    // splits the youtube link into useless data[0] and the video id[1] 
    let youtubeLink = values.link.split('watch?v=')

    let submitTitle = values.title
    let submitLink = youtubeLink[1]
    let play = false
    
    // creates a valid object that can be sent to the API
    const video = { lesson: props.lessonId, title: submitTitle, link: submitLink, play }
    props.addVideo(video)
    props.getLessons()

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
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              className={errors.title && "error-input"}
              placeholder="Title"
              required 
            />
            {errors.title && <p className="error-text">{errors.title}</p>}
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="link"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.link}
              className={errors.link && "error-input"}
              placeholder="Youtube Link"
              required 
            />
            {errors.link && <p className="error-text">{errors.link}</p>}
          </div>

          <div className="form-group">
              <button type="submit" className="btn" disabled={isSubmitting}>Submit</button>
              <button className="btn" onClick={props.formHandler}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}


export default connect(null, { getLessons, addVideo })(LessonVideoForm)

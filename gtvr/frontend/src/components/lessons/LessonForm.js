import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSubjects, addLesson } from "../../actions/lessons";

import useFormValidation from "../utils/useFormValidation";
import validateForm from "../utils/validateForm";

const INITIAL_STATE = {
  name: "",
  number: "",
  description: ""
};

const LessonForm = props => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateForm);

  // on submit button click
  const onSubmit = e => {
    e.preventDefault()
    handleSubmit(e)

    // creates a valid object that can be sent to the API
    let submitName = values.name
    let submitNumber = parseInt(values.number)
    let submitDescription = values.description
    let videos = [{}]

    const lesson = { name: submitName, number: submitNumber, subject: props.subjectID, description: submitDescription, videos }
    props.addLesson(lesson)
    props.getSubjects()
    
    // closes the form modal
    props.formHandler()
  }

  return (
    <div className="modalForm-div">

      <div className="modalForm-container">  

        <div className="close-container" onClick={props.formHandler}>
          <div className="leftright"></div>
          <div className="rightleft"></div>
        </div>

        <h1>Add new Lesson</h1>

        <form onSubmit={onSubmit} autoComplete="off">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={errors.name && "error-input"}
              placeholder={'Name'}
              required
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="number"
              name="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.number}
              className={errors.number && "error-input"}
              placeholder={'Lesson number'}
              required 
            />
            {errors.number && <p className="error-text">{errors.number}</p>}
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              className={errors.description && "error-input"}
              placeholder={'Description'}
              required 
            />
            {errors.description && <p className="error-text">{errors.description}</p>}
          </div>

          <div className="form-group">
              <button type="submit" className="btn" disabled={isSubmitting}>Submit</button>
              <button className="btn" onClick={props.formHandler}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default connect(null, { getSubjects, addLesson })(LessonForm)

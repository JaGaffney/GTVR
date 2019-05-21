import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSubjects, addSubject} from "../../actions/lessons";

import useFormValidation from "../utils/useFormValidation";
import validateForm from "../utils/validateForm";

const INITIAL_STATE = {
  name: "",
  teacher: "",
  description: ""
};

const SubjectForm = props => {
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
    let submitTeacher = values.teacher
    let submitDescription = values.description
    let lessons = []

    const subject = { name: submitName, teacher: submitTeacher, description: submitDescription, lessons }
    props.addSubject(subject)
    
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

        <h1>Add new Subject</h1>

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
              type="text"
              name="teacher"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.teacher}
              className={errors.teacher && "error-input"}
              placeholder={'Teacher'}
              required 
            />
            {errors.teacher && <p className="error-text">{errors.teacher}</p>}
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

export default connect(null, { getSubjects, addSubject })(SubjectForm)

import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSubjects, addLesson } from "../../actions/lessons";

const LessonForm = props => {

  const propTypes = {
    addLesson: PropTypes.func.isRequired,
    getSubjects: PropTypes.func.isRequired
  }

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");


  // on submit button click
  const onSubmit = e => {
    e.preventDefault()

    // creates a valid object that can be sent to the API
    setNumber(parseInt(number))
    let videos = [{}]
    const lesson = { name, number, subject: props.subjectID, description, videos }
    props.addLesson(lesson)
    props.getSubjects()
    
    // resetting data back to default values
    setName("");
    setNumber("");
    setDescription("");

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
              onChange={e => setName(e.target.value)}
              value={name}
              placeholder={'Name'}
              required
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="number"
              name="number"
              onChange={e => setNumber(e.target.value)}
              value={number}
              placeholder={'Lesson number'}
              required 
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={e => setDescription(e.target.value)}
              value={description}
              placeholder={'Description'}
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
  )
}

export default connect(null, { getSubjects, addLesson })(LessonForm)

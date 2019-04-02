import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLesson } from "../../actions/lessons";

export class LessonForm extends Component {

  static propTypes = {
    addLesson: PropTypes.func.isRequired
  }

  state = {
    name: "",
    subject: ""
  }

  // checks for changes inside the form
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // on submit button click
  onSubmit = e => {
    console.log("got here")
    e.preventDefault()
    // data gathering
    let { name, subject } = this.state

    // creates a valid object that can be sent to the API
    let videos = [{}]
    const lesson = { name, subject, videos }
    this.props.addLesson(lesson)

    // resetting data back to default values
    this.setState({
        name: '',
        subject: ''
    })
  }

  render() {
    const { name, subject } = this.state;

    return (
      <div className="modalForm-div">

        <div className="modalForm-container">  

          <div className="close-container" onClick={this.props.formHandler}>
            <div className="leftright"></div>
            <div className="rightleft"></div>
          </div>

          <h1>Add new Lesson</h1>

          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                onChange={this.onChange}
                value={name}
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                className="form-control"
                type="text"
                name="subject"
                onChange={this.onChange}
                value={subject}
              />
            </div>

            <div className="form-group">
                <button type="submit" className="btn">Submit</button>
                <button className="btn" onClick={this.props.formHandler}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, { addLesson })(LessonForm)

import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addVideo } from "../../actions/lessons";

export class LessonVideoForm extends Component {

  static propTypes = {
    addVideo: PropTypes.func.isRequired
  }

  state = {
    title: "",
    link: "",
    play: false
  }

  // checks for changes inside the form
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // on submit button click
  onSubmit = e => {
    e.preventDefault()
    // data gathering
    let { title, link, play } = this.state

    // will need a better filter for extracting the youtube id data
    let youtubeLink = link.split('watch?v=')
    let youtubeLinkFilter = youtubeLink[1].split("&")
    link = youtubeLinkFilter[0]

    console.log(link)

    // creates a valid object that can be sent to the API
    const video = { lesson: this.props.lessonId, title, link, play }
    this.props.addVideo(video)

    // resetting data back to default values
    this.setState({
        title: "",
        link: ""
    })
  }

  render() {
    const { title, link } = this.state;

    return (
      <div className="LessonForm-div">
        <h1>Add new Video</h1>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>

          <div className="form-group">
            <label>Link</label>
            <input
              className="form-control"
              type="text"
              name="link"
              onChange={this.onChange}
              value={link}
            />
          </div>

          <div className="form-group">
              <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addVideo })(LessonVideoForm)

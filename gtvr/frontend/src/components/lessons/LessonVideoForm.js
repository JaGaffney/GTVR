import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addVideo, getLessons } from "../../actions/lessons";

export class LessonVideoForm extends Component {

  static propTypes = {
    addVideo: PropTypes.func.isRequired,
    getLessons: PropTypes.func.isRequired
  }

  state = {
    title: "",
    link: "",
    play: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
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
    this.props.getLessons()

    // resetting data back to default values
    this.setState({
        title: "",
        link: ""
    })
    this.props.formHandler()
  }

  render() {
    const { title, link } = this.state;

    return (
      <>
      <div className="modalForm-div">
        
        <div className="modalForm-container">

        <div className="close-container"  onClick={this.props.formHandler}>
          <div className="leftright"></div>
          <div className="rightleft"></div>
        </div>

        <h1>Add new Video</h1>
        
          <form onSubmit={this.onSubmit}>
          
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="title"
                onChange={this.onChange}
                value={title}
                placeholder="Title"
              />
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="link"
                onChange={this.onChange}
                value={link}
                placeholder="Youtube Link"
              />
            </div>

            <div className="form-group">
                <button type="submit" className="btn">Submit</button>
                <button className="btn" onClick={this.props.formHandler}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
      </>
    )
  }
}

export default connect(null, { getLessons, addVideo })(LessonVideoForm)

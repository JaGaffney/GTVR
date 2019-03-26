import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLessons } from '../../actions/lessons'

import LessonSingle from './LessonSingle'

export class Lessons extends Component {
    static propTypes = {
        lessons: PropTypes.array.isRequired
        // getJobs: PropTypes.func.isRequired,
    }

    state = {
        loadSingle: false,
        lessonData: "",
    }


    componentDidMount(){
        this.props.getLessons();
    }


    // Single page component handlering
    loadSingleLesson = (lesson) => {
        this.setState({
            loadSingle: true,
            lessonData: lesson
        })
    }

    // closes down the single page component
    onLessonPageHandler = () => {
        this.setState({
            loadSingle: false
        })
    }

    tableGenerator(){
        if (this.props.lessons.length >= 1){
            return (
                <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Video Title</th>
                        <th>Video Link</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.lessons.map(lesson => (
                        <tr key={lesson["id"]} onClick={this.loadSingleLesson.bind(this, lesson)}>
                            <td>{lesson["id"]}</td>
                            <td>{lesson['name']}</td>
                            <td>{lesson['subject']}</td>
                            { lesson["videos"].map(video => (
                                <tr key={video.id + video.title }>
                                    <td>{video.title}</td>
                                    <td><iframe width="170" height="95" src={`https://www.youtube.com/embed/${video.link}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></td>
                                </tr>
                            ))}
                            
                        </tr>
                    ))}
                </tbody>
            </table>
            )
        } 
    }

    

    render() {

        return (
            <>
            <h2>Lessons</h2>
            <br></br>

            {(this.state.loadSingle && <LessonSingle lessonInfo={this.state.lessonData} /> )}
            {(!this.state.loadSingle && this.tableGenerator() )}
            </>
        )
    }
}

const mapStateToProps = state => ({
    lessons: state.lessons.lessons
})


export default connect(mapStateToProps, { getLessons } )(Lessons)

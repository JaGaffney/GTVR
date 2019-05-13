import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getSubjects, getLessons, deleteLesson } from '../../actions/lessons'

import Lessons from './Lessons'
import LessonForm from './LessonForm'

import Backdrop from '../layout/Backdrop'

const LessonDashboard = props => {
  const propTypes = {
    lessons: PropTypes.array.isRequired,
    getLessons: PropTypes.func.isRequired,
    deleteLesson: PropTypes.func.isRequired,
  }

  const [loadSingle, setLoadSingle] = useState(false);
  const [lessonData, setlessonData] = useState("");
  const [loadForm, setLoadForm] = useState(false);
  const [lessonID, setLessonID] = useState(0);
  const [teacherName, setTeacherName] = useState("");
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    props.getSubjects();
    props.getLessons();
  }, []);

  const handleImageLoaded = () => {
    console.log("Image is loaded")
    setSpinner(false)
  }

  // switches between states for show/add form button
  const onFormHandler = () => {
    setLoadForm(!loadForm)
  }

  // Single page component handlering
  const loadLesson = (lesson, teacher) => {
    setLoadSingle(true);
    setlessonData(lesson);
    setLoadForm(false);
    setLessonID(lesson.id);
    setTeacherName(teacher);
  }

  // closes down the single page component
  const onLessonPageHandler = () => {
    setLoadSingle(false)
  }

  const onDeleteLesson = (id) => {
    props.deleteLesson(id)
    props.getSubjects();
    props.getLessons();
  }

  const tableGenerator = () => {
    if (props.subjectInfo.lessons.length >= 1){
      return (
        <>
          { props.subjectInfo.lessons.map(lesson => (
            <div className="lessonDashboard__card" key={lesson['id']}>

            <button className="lessonDashboard__card-deleteBtn" onClick={onDeleteLesson.bind(null, lesson['id'])}>&times;</button>
            <br></br>
              <div className="lessonDashboard__card-container" onClick={loadLesson.bind(null, lesson, props.subjectInfo.teacher)}>
                <div className="lesson-img">
                {spinner ? <i className="fa fa-spinner fa-spin" /> : <img src={"https://unsplash.it/2000/10" + lesson['id']} onLoad={handleImageLoaded.bind(null)}></img>}
                    
                </div>
                <h4><strong>Name: </strong>{lesson['name']}</h4>
                <h4><strong>Teacher: </strong>{props.subjectInfo.teacher}</h4>
                <h4><strong>Number: </strong>{lesson['number']}</h4>
                <p>Total Videos: {lesson['videos'].length}</p>
                <p>{lesson['description']}</p> 
              </div>
            </div>
          ))}
        </>
      ) 
    }
  }

  return (
    <>
    <div className="lessonDashboard__div-Area">

    {( loadForm && <Backdrop formHandler={onFormHandler.bind(null)} /> )}
    {( loadForm && <LessonForm formHandler={onFormHandler.bind(null)} subjectID={props.subjectID} /> )}

      <div className="lessonDashboard__div">
        <br></br>
        {(!loadSingle && <button className="btn" onClick={onFormHandler.bind(null)}>{loadForm ? 'Hide' : 'Add'} new Lesson</button> )}
        <h1><strong>Subject Name: </strong>{props.subjectInfo.name}</h1>
        
        <div className="lessonDashboard__div-container">
          {(loadSingle && <Lessons lessonInfo={lessonData} lessonID={lessonID} teacherName={teacherName} /> )}
          {(!loadSingle && tableGenerator() )}
        </div>
      </div>
    </div>
    </>
  )
}


const mapStateToProps = state => ({
    lessons: state.lessons.lessons,
    subjects: state.lessons.subjects
})

export default connect(mapStateToProps, { getSubjects, getLessons, deleteLesson } )(LessonDashboard)

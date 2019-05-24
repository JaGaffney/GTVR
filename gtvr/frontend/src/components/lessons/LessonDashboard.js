import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getSubjects, getLessons, deleteLesson, addSubjectInfo } from '../../actions/lessons'

import Lessons from './Lessons'

const LessonDashboard = props => {

  useEffect(() => {
    props.getSubjects();
    props.getLessons();
  }, []);


  const onDeleteLesson = (id) => {
    props.deleteLesson(id)
    props.getSubjects();
    props.getLessons();
  }

  const tableGenerator = () => {
    if (props.subjectData.lessons.length >= 1){
      return (
        <>
          { props.subjectData.lessons.map(lesson => (
            <div className="lessonDashboard__card" key={lesson['id']}>

            <button className="lessonDashboard__card-deleteBtn" onClick={onDeleteLesson.bind(null, lesson['id'])}>&times;</button>
            <br></br>
              <div className="lessonDashboard__card-container" onClick={props.loadLesson.bind(null, lesson, props.subjectData.teacher)}>
                <div className="lesson-img">
                  <img src={"https://unsplash.it/2000/10" + lesson['id']}></img>
                    
                </div>
                <h4><strong>Name: </strong>{lesson['name']}</h4>
                <h4><strong>Teacher: </strong>{props.subjectData.teacher}</h4>
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

      <div className="lessonDashboard__div">

        <div className="lessonDashboard__div-container">
          {(props.loadSingleLesson && <Lessons lessonInfo={props.lessonData} lessonID={props.subjectInfo.lessonID} teacherName={props.subjectInfo.teacher} /> )}
          {(!props.loadSingleLesson && tableGenerator() )}
        </div>
      </div>
    </>
  )
}


const mapStateToProps = state => ({
    lessons: state.lessons.lessons,
    subjects: state.lessons.subjects,
    subjectInfo: state.lessons.subjectInfo
})

export default connect(mapStateToProps, { getSubjects, getLessons, deleteLesson, addSubjectInfo } )(LessonDashboard)

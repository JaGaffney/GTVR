import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getSubjects, getLessons, deleteLesson, addSubjectInfo } from '../../actions/lessons'

import Lessons from './Lessons'

import LessonForm from './LessonForm'
import Backdrop from '../layout/Backdrop'

const LessonDashboard = props => {

  const [loadSingle, setLoadSingle] = useState(false);
  const [lessonData, setlessonData] = useState("");
  const [loadForm, setLoadForm] = useState(false);
  const [lessonID, setLessonID] = useState(0);
  const [teacherName, setTeacherName] = useState("");

  useEffect(() => {
    props.getSubjects();
    props.getLessons();
  }, []);



  // switches between states for show/add form button
  // const onLessonFormHandler = () => {
  //   setLoadForm(!loadForm)
  // }

  // Single page component handleing
  const loadLesson = (lesson, teacher) => {
    setLoadSingle(true);
    setlessonData(lesson);
    setLoadForm(false);
    setLessonID(lesson.id);
    setTeacherName(teacher);
    props.addSubjectInfo({subject: props.subjectInfo.subject,
                          subjectID: props.subjectInfo.subjectID, 
                          lesson: lesson.name, 
                          lessonID: lesson.id, 
                          video: "",
                          videoID: "",
                        })
  }

  // closes down the single page component
  const onLessonPageHandler = () => {
    setLoadSingle(false)
    props.addSubjectInfo({subject: props.subjectInfo.name,
      subjectID: props.subjectInfo.id, 
      lesson: "", 
      lessonID: "", 
      video: "",
      videoID: "",
    })
  }

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
              <div className="lessonDashboard__card-container" onClick={loadLesson.bind(null, lesson, props.subjectData.teacher)}>
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

    {/* {( loadForm && <Backdrop formHandler={onLessonFormHandler.bind(null)} /> )}
    {( loadForm && <LessonForm formHandler={onLessonFormHandler.bind(null)} subjectID={props.subjectID} /> )} */}

      <div className="lessonDashboard__div">
        <br></br>
        {/* {(!loadSingle && <button className="btn" onClick={onLessonFormHandler.bind(null)}>{loadForm ? 'Hide' : 'Add'} new Lesson</button> )} */}
        
        <div className="lessonDashboard__div-container">
          {(loadSingle && <Lessons lessonInfo={lessonData} lessonID={lessonID} teacherName={teacherName} /> )}
          {(!loadSingle && tableGenerator() )}
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

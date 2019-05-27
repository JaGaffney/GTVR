import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getSubjects, deleteSubject, addSubjectInfo} from '../../actions/lessons'

import Backdrop from '../layout/Backdrop'
import SidePanel from '../layout/SidePanel'
import LessonDashboard from '../lessons/LessonDashboard'

import SubjectForm from './SubjectForm'
import LessonForm from '../lessons/LessonForm'
import LessonVideoForm from '../lessons/LessonVideoForm'


const SubjectDashboard = props => {
  // how the states looked when each file had seperate states
  // SubjectDashBoard.js
  const [loadSingle, setLoadSingle] = useState(false);
  const [subjectData, setSubjectData] = useState("");
  const [loadForm, setLoadForm] = useState(false);
  // LessonDashBoard.js
  const [loadSingleLesson, setLoadSingleLesson] = useState(false);
  const [lessonData, setLessonData] = useState("");
  const [loadLessonForm, setLoadLessonForm] = useState(false);
  // Lessons.js
  const [loadVideoForm, setLoadVideoForm] = useState(false);

  useEffect(() => {
    props.getSubjects();
    return () => {
      // console.log("Cleaning up...")
      // need to reset the subect data when unmounting to stop an error if going back to the page from another window
      props.addSubjectInfo({subject: "", 
        subjectID: "", 
        lesson: "", 
        lessonID: "", 
        video: "",
        videoID: "",
        teacher: ""
      })
    }
  }, []);

  // loads and sets the lesson data on click from a SubjectDashboard item
  const loadSubject = (subject) => {
    setLoadSingle(true)
    setSubjectData(subject)
    setLoadForm(false)
    props.addSubjectInfo({subject: subject.name, 
                          subjectID: subject.id, 
                          lesson: "", 
                          lessonID: "", 
                          video: "",
                          videoID: "",
                          teacher: ""
                        })
  }

  // resets data to go back to SubjectDashboard init page
  const onSubjectHandler = () => {
    setLoadSingle(false)
    setSubjectData("")
    setLoadSingleLesson(false)
    setLessonData("")

    setLoadForm(false)
    setLoadLessonForm(false)
    setLoadVideoForm(false)
    props.addSubjectInfo({subject: "",
      subjectID: "", 
      lesson: "", 
      lessonID: "", 
      video: "",
      videoID: "",
      teacher: ""
    })  
  }

  // loads and sets the lesson data on click from a LessonDashBoard item
  const loadLesson = (lesson, teacher) => {
    setLoadSingleLesson(true);
    setLessonData(lesson);
    props.addSubjectInfo({subject: props.subjectInfo.subject,
                          subjectID: props.subjectInfo.subjectID, 
                          lesson: lesson.name, 
                          lessonID: lesson.id, 
                          video: "",
                          videoID: "",
                          teacher: teacher
                        })
  }

  // resets data to go back to LessonDashboard init page
  const onLessonHandler = () => {
    setLoadSingleLesson(false)
    setLessonData("")

    setLoadForm(false)
    setLoadLessonForm(false)
    setLoadVideoForm(false)

    props.addSubjectInfo({subject: props.subjectInfo.subject,
      subjectID: props.subjectInfo.subjectID, 
      lesson: "", 
      lessonID: "", 
      video: "",
      videoID: "",
      teacher: ""
    })  
  }

  // resets data to go back to LessonDashboard init page
  const onVideoHandler = () => {
  }

  const onDeleteSubject = (id) => {
    props.deleteSubject(id)
  }

  // form handling, heavly refactored
  // switches between states for show/add form button
  const onFormHandler = () => { 
    setLoadForm(!loadForm)
  }
  const onLessonFormHandler = () => {
    setLoadLessonForm(!loadLessonForm)
  }
  const onVideoFormHandler = () => {
    setLoadVideoForm(!loadVideoForm)
  }

  const tableGenerator = () => {
    if (props.subjects.length >= 1){
      return (
        <>
          { props.subjects.map(subject => (
            <div className="lessonDashboard__card" key={subject['id']}>

            <button className="lessonDashboard__card-deleteBtn" onClick={onDeleteSubject.bind(null, subject['id'])}>&times;</button>
            <br></br>
              <div className="lessonDashboard__card-container" onClick={loadSubject.bind(this, subject)}>
              <div className="lesson-img"><img src={"https://unsplash.it/2000/10" + subject['id']}></img></div>
                <h4><strong>Name: </strong>{subject['name']}</h4>
                <h4><strong>Teacher: </strong>{subject['teacher']}</h4>
                <p><strong>Total Lessons: {subject['lessons'].length}</strong></p>
                <p>{subject['description']}</p>
                
              </div>
            </div>
          ))}
        </>
      ) 
    }
  }

  return (
    <div className="lessonDashboard__div-Area">

      <div className="lessonDashboard__div-Side">
        <SidePanel  subjectHandler={onSubjectHandler.bind(this)}
                    lessonHandler={onLessonHandler.bind(this)}
                    videoHandler={onVideoHandler.bind(this)}
                    formSubjectHandler={onFormHandler.bind(this)} 
                    formLessonHandler={onLessonFormHandler.bind(this)} 
                    formVideoHandler={onVideoFormHandler.bind(this)}
                    
        />
      </div>

      <div className="lessonDashboard__div-Main">
        {( loadForm && <Backdrop formHandler={onFormHandler.bind(this)} /> )}
        {( loadForm && <SubjectForm formHandler={onFormHandler.bind(this)} /> )}

        {( loadLessonForm && <Backdrop formHandler={onLessonFormHandler.bind(null)} /> )}
        {( loadLessonForm && <LessonForm formHandler={onLessonFormHandler.bind(null)} /> )}

        {( loadVideoForm && <Backdrop formHandler={onVideoFormHandler.bind(this)} /> )}
        {( loadVideoForm && <LessonVideoForm formHandler={onVideoFormHandler.bind(this)} /> )}

        <div className="lessonDashboard__div">
          <div className="lessonDashboard__div-container">

            {(loadSingle && <LessonDashboard 
                                subjectData={subjectData} 
                                loadSingleLesson={loadSingleLesson}
                                lessonData={lessonData}
                                loadLesson={loadLesson}
                            /> )}

            {(!loadSingle && tableGenerator() )}

          </div>
        </div>
      </div>

    </div>
  )
}

const mapStateToProps = state => ({
    subjects: state.lessons.subjects,
    subjectInfo: state.lessons.subjectInfo
})

export default React.memo(connect(mapStateToProps, { getSubjects, deleteSubject, addSubjectInfo } )(SubjectDashboard))

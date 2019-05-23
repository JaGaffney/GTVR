import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getSubjects, deleteSubject, getSubjectInfo, addSubjectInfo} from '../../actions/lessons'

import Backdrop from '../layout/Backdrop'
import SidePanel from '../layout/SidePanel'
import LessonDashboard from '../lessons/LessonDashboard'

import SubjectForm from './SubjectForm'
import LessonForm from '../lessons/LessonForm'
import LessonVideoForm from '../lessons/LessonVideoForm'


const SubjectDashboard = props => {

  const [loadSingle, setLoadSingle] = useState(false);
  const [subjectData, setSubjectData] = useState("");
  const [loadForm, setLoadForm] = useState(false);
  const [subjectID, setSubjectID] = useState(0);
  const [loadLessonForm, setLoadLessonForm] = useState(false);
  const [loadVideoForm, setLoadVideoForm] = useState(false);

  // can use a blank array as 2nd argument so it only runs once like componendidMount
  useEffect(() => {
    props.getSubjects();
    return () => {
      console.log("Cleaning up...")
    }
  }, []);

  //Single page component handlering
  const loadSubject = (subject) => {
    console.log(subject)
    setLoadSingle(true)
    setSubjectData(subject)
    setLoadForm(false)
    setSubjectID(subject.id)
    props.addSubjectInfo({subject: subject.name, 
                          subjectID: subject.id, 
                          lesson: "", 
                          lessonID: "", 
                          video: "",
                          videoID: ""
                        })
  }


  const onLessonHandler = () => {
    setLoadSingle(false)
    setSubjectData("")
    setLoadForm(false)
    setSubjectID("")
    props.addSubjectInfo({subject: "",
      subjectID: "", 
      lesson: "", 
      lessonID: "", 
      video: "",
      videoID: "",
    })  
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
        <SidePanel  formSubjectHandler={onFormHandler.bind(this)} 
                    lessonHandler={onLessonHandler.bind(this)}
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
                                  subjectID={subjectID} 
                                  onLessonHandler={onLessonHandler.bind(this)} 
                                  onLessonFormHanlder={onLessonFormHandler.bind(this)}
                              /> )}
              {(!loadSingle && tableGenerator() )}

            </div>
          </div>
      </div>

    </div>
  )
}

const mapStateToProps = state => ({
    subjects: state.lessons.subjects
})

export default React.memo(connect(mapStateToProps, { getSubjects, deleteSubject, getSubjectInfo, addSubjectInfo } )(SubjectDashboard))

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getSubjects } from '../../actions/lessons'

import Backdrop from '../layout/Backdrop'
import LessonDashboard from '../lessons/LessonDashboard'

const SubjectDashboard = props => {
  const propTypes = {
    subjects: PropTypes.array.isRequired,
    getSubjects: PropTypes.func.isRequired,
  }

  const [loadSingle, setLoadSingle] = useState(false);
  const [subjectData, setSubjectData] = useState("");
  const [loadForm, setLoadForm] = useState(false);
  const [subjectID, setSubjectID] = useState(0);

  // can use a blank array as 2nd argument so it only runs once like componendidMount
  useEffect(() => {
    props.getSubjects();
    return () => {
      console.log("Cleaning up...")
    }
  }, []);

  //Single page component handlering
  const loadSubject = (subject) => {
    setLoadSingle(true)
    setSubjectData(subject)
    setLoadForm(false)
    setSubjectID(subject.id)
  }

  // closes down the single page component
  const onSubjectPageHandler = () => {
    setLoadSingle(false)
  }

  const tableGenerator = () => {
    if (props.subjects.length >= 1){
      return (
        <>
          { props.subjects.map(subject => (
            <div className="lessonDashboard__card" key={subject['id']}>

            <button className="lessonDashboard__card-deleteBtn">&times;</button>
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
    <>
    <div className="lessonDashboard__div-Area">

    {( loadForm && <Backdrop formHandler={onFormHandler.bind(this)} /> )}
    {/* {( this.state.loadForm && <subjectForm formHandler={this.onFormHandler.bind(this)} /> )} */}

      <div className="lessonDashboard__div">
        <br></br>
        {/* {(!this.state.loadSingle && <button className="btn" onClick={this.onFormHandler.bind(this)}>{this.state.loadForm ? 'Hide' : 'Add'} new subject</button> )}
          */}
        
        <div className="lessonDashboard__div-container">
          {(loadSingle && <LessonDashboard subjectInfo={subjectData} subjectID={subjectID} /> )}
          {(!loadSingle && tableGenerator() )}
        </div>
      </div>
    </div>
    </>
  )
}

const mapStateToProps = state => ({
    subjects: state.lessons.subjects
})

export default React.memo(connect(mapStateToProps, { getSubjects } )(SubjectDashboard))

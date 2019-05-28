import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getSubjects } from '../../actions/lessons'

const SidePanel = props => {
    // temp admin mode until accounts are made
    let adminMode = false
    const PanelButton = (name, backHandler, addHandler, activeAddButton, type) => {
        return (
            <div className={`PanelButton ${(activeAddButton ? "active-panel": "")}`}>
                <div className="PanelButton-top" onClick={backHandler}>
                    <h1>{type}</h1>
                    <h5>click to go to: {name}</h5>
                </div>
                
                <div className={(adminMode ? "" : "admin-panel-deactive")}>
                    <div className="PanelButton-bottom">
                        <div onClick={addHandler}>{(activeAddButton ? "Add": "" )}</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="PanelButton__container">

            {PanelButton(props.subjectInfo.subject, 
                        props.subjectHandler.bind(this), 
                        props.formSubjectHandler.bind(this), 
                        (props.subjectInfo.subject === "")? true : false, 
                        "Subject"
            )}

            {PanelButton(props.subjectInfo.lesson, 
                        props.lessonHandler.bind(this), 
                        props.formLessonHandler.bind(this), 
                        (props.subjectInfo.subject != "" && props.subjectInfo.lesson === "") ? true : false, 
                        "Lesson"
            )}

            {PanelButton(props.subjectInfo.video, 
                        props.videoHandler.bind(this), 
                        props.formVideoHandler.bind(this), 
                        (props.subjectInfo.subject != "" && props.subjectInfo.lesson != "" && props.subjectInfo.video === "") ? true : false, 
                        "Video"
            )}

        </div>
    )
}

const mapStateToProps = state => ({
    subjectInfo: state.lessons.subjectInfo
  })
  
export default connect(mapStateToProps, { getSubjects } )(SidePanel)


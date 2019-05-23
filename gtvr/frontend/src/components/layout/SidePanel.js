import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getSubjects } from '../../actions/lessons'


const SidePanel = props => {
    const SubjectPanelButton = () => {
        let addButton = false
        if (props.subjectInfo.subject == ""){
            addButton = true
        }
        function empty() {}
        return (
            PanelButton(props.subjectInfo.subject, empty(), props.formSubjectHandler.bind(this), addButton)
        )
    }
    const LessonPanelButton = () => {
        let addButton = false
        if (props.subjectInfo.subject != "" && props.subjectInfo.lesson === ""){
            addButton = true
        }
        return (
            PanelButton(props.subjectInfo.lesson, props.lessonHandler.bind(this), props.formLessonHandler.bind(this), addButton)
        )
    }
    const VideoPanelButton = () => {
        let addButton = false
        if (props.subjectInfo.subject != "" && props.subjectInfo.lesson != "" && props.subjectInfo.video === ""){
            addButton = true
        }
        function empty() {}
        return (
            PanelButton(props.subjectInfo.video, empty(), props.formVideoHandler.bind(this), addButton)
        )
    }

    const PanelButton = (name, back, add, addButton) => {
        let backButton = 'Back'
        if (!back){
            backButton = ""
        }
        // needs more work to check to see if previous entry is avaialbe if so add only here
        let addIcon = ''
        if (addButton){
            addIcon = "Add"
        }

        return (
            <div className="PanelButton">
                <div className="PanelButton-top">
                    <h3>go to: {name}</h3>
                </div>
                <div className="PanelButton-bottom">
                    {/* <div className="arrow-left icon">Back</div>
                    <div className="plus icon" onClick={props.formSubjectHandler.bind(this)}>Add</div> */}
                    <div onClick={back}>{backButton}</div>
                    <div onClick={add}>{addIcon}</div>
                </div>
            </div>
        )
    }

    return (
        <div className="PanelButton__container">
            {SubjectPanelButton()}
            {LessonPanelButton()}
            {VideoPanelButton()}
        </div>
    )
}

const mapStateToProps = state => ({
    subjectInfo: state.lessons.subjectInfo
  })
  
export default connect(mapStateToProps, { getSubjects } )(SidePanel)


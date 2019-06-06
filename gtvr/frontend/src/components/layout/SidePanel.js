import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getSubjects } from '../../actions/lessons'

const SidePanel = props => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth)

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })

    const PanelButton = (name, backHandler, addHandler, activeAddButton, type) => {
        let stickyScreenSize = ""
        if (screenWidth < 800 && activeAddButton) {
            stickyScreenSize = "sticky-panel"
        }

        return (
            <div className={`PanelButton ${(activeAddButton ? "active-panel ": "")} ${stickyScreenSize}`}>
                <div className="PanelButton-top" onClick={backHandler}>
                    <h1>{type}</h1>
                    <h5>click to go to: {name}</h5>
                </div>
                
                <div className={(props.teacherMode ? "" : "admin-panel-deactive")}>
                    <div className="PanelButton-bottom">
                        <div onClick={addHandler}>{(activeAddButton ? "Add": "" )}</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="PanelButton__container">
            <form>
                <label>
                Teacher Mode:
                <input
                    name="teacherMode"
                    type="checkbox"
                    checked={props.teacherMode}
                    onChange={props.teacherModeHander} />
                </label>
            </form>


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


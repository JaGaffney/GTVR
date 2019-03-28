import axios from "axios";
// import { createMessage, returnError } from './messages'
// import { tokenConfig } from './auth'

import { GET_LESSONS, GET_LESSON, DELETE_LESSON, ADD_LESSON, UPDATE_LESSON, GET_VIDEO } from "./types";

// GET_LESSONS
export const getLessons = () => dispatch => {
    axios
        .get("/api/lessons/")
        .then(res => {
            dispatch({
                type: GET_LESSONS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

// GET_VIDEO gets a single lesson, needs optimising to only get single video
export const getVideo = (id) => dispatch => {
    axios
        .get(`/api/videos/${id}/`)
        .then(res => {
            dispatch({
                type: GET_VIDEO,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

// DELETE_LESSON
export const deleteLesson = id => (dispatch, getState) => {
    axios
        .delete(`/api/lesson/${id}/`)
        .then(res => {
            dispatch({
            type: DELETE_LESSON,
            payload: id
            })
        })
        .catch(err => console.log(err));
}

// ADD_LESSON
export const addLesson = (lesson) => (dispatch, getState) => {
    axios
        .post("/api/lessons", lesson)
        .then(res => {
            dispatch({
                type: ADD_LESSON,
                payload: res.data
            })
        })
        .catch(err => dispatch(returnError(err.response.data, err.response.status)))
}


// // Update Job
// export const updateLead = (id, lead) => (dispatch, getState) => {
//     axios
//         .put(`/api/leads/${id}/`, lead, tokenConfig(getState))
//         .then(res => {
//             dispatch(createMessage({ addLead: 'Lead Updated' }))
//             dispatch({
//             type: UPDATE_LEAD,
//             payload: lead 
//             })
//         })
//         .catch(err => console.log(err));
// }
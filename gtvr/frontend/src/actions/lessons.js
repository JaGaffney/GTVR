import axios from "axios";
// import { createMessage, returnError } from './messages'
import { tokenConfig } from './auth'

import { GET_LESSONS, GET_LESSON, DELETE_LESSON, ADD_LESSON, UPDATE_LESSON, GET_VIDEO, ADD_VIDEO, DELETE_VIDEO, UPDATE_VIDEO } from "./types";

/// LESSONS
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

// DELETE_LESSON
export const deleteLesson = id => dispatch => {
    axios
        .delete(`/api/lessons/${id}/`, tokenConfig())
        .then(res => {
            dispatch({
            type: DELETE_LESSON,
            payload: id
            })
        })
        .catch(err => console.log(err));
}

// ADD_LESSON
export const addLesson = (lesson) => dispatch => {
    axios
        .post("/api/lessons/", lesson, tokenConfig())
        .then(res => {
            dispatch({
                type: ADD_LESSON,
                payload: res.data
            })
        })
        .catch(err => dispatch(returnError(err.response.data, err.response.status)))
}

////// VIDEOS
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

// ADD_VIDEO
export const addVideo = (video) => dispatch => {
    axios
        .post("/api/videos/", video, tokenConfig())
        .then(res => {
            dispatch({
                type: ADD_VIDEO,
                payload: res.data
            })
        })
        .catch(err => dispatch(returnError(err.response.data, err.response.status)))
}

// DELETE_VIDEO
export const deleteVideo = id => dispatch => {
    axios
        .delete(`/api/videos/${id}/`, tokenConfig())
        .then(res => {
            dispatch({
            type: DELETE_VIDEO,
            payload: id
            })
        })
        .catch(err => console.log(err));
}

// // Update Video
export const updateVideo = (id, video) => (dispatch) => {
    console.log(video)
    console.log(tokenConfig())
    axios
        .put(`/api/videos/${id}/`, JSON.stringify(video), tokenConfig())
        .then(res => {
            dispatch({
                type: UPDATE_VIDEO,
                payload: video 
            })
        })
        .catch(err => console.log(err));
}
import { GET_SUBJECTS, ADD_SUBJECT, DELETE_SUBJECT, GET_LESSONS, DELETE_LESSON, ADD_LESSON, UPDATE_LESSON, GET_VIDEO, ADD_VIDEO, DELETE_VIDEO, UPDATE_VIDEO } from '../actions/types.js'

const initialState = {
    subjects: [],
    lessons: [],
    video: []
}

// set lesson
const updateStateInfo = (stateArray, action) => {
    let updatedLesson = []
    stateArray.filter(lesson => {
    if (lesson.id === action.payload.id) {
        updatedLesson = [...updatedLesson, action.payload]
    } else {
        updatedLesson = [...updatedLesson, lesson]
    }
  })
  return updatedLesson
}

// sets the state for nested states
const updateNestedStateInfo = (stateArray, action) => {
    // filter out the nested element you want to update
    let lessons = stateArray.filter(item => item.id === action.payload.lesson)
    // update the payload with the new data
    lessons[0].videos = [...lessons[0].videos, action.payload]
    // update the state with the new payload data
    stateArray.map((item, index) => {
        if (item === lessons[0].id) {
            stateArray[index] = lessons[0]
        }
    })
    return stateArray
}

export default function(state = initialState, action) {
    // common convetion is to use a switch with cases
    switch(action.type) {
        case GET_SUBJECTS:
            return {
                ...state,
                subjects: action.payload
            }
        case ADD_SUBJECT:
            return {
                ...state,
                subjects: [...state.subjects, action.payload]
            }
        case DELETE_SUBJECT:
            return {
                ...state,
                subjects: state.subjects.filter(subject => subject.id !== action.payload)
            }            
        case GET_LESSONS:
            return {
                ...state,
                lessons: action.payload
            }
        case DELETE_LESSON:
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson.id !== action.payload)
            }
        case ADD_LESSON:
            return {
                ...state,
                lessons: [...state.lessons, action.payload]
            }
        case GET_VIDEO:
            return {
                ...state,
                video: action.payload
            }
        case ADD_VIDEO:
            return {
                ...state,
                lessons: updateNestedStateInfo(state.lessons, action)
            } 
        case DELETE_VIDEO:
            return {
                ...state,
                lessons: updateNestedStateInfo(state.lessons, action)
            }
        case UPDATE_VIDEO:
            return {
                ...state,
                video: updateStateInfo(state.video, action)
            }
        default:
            return state
    }
}


        // case UPDATE_LEAD:
        // // probally not a good way of updating the state value but i couldnt work out a better way
        //   return {
        //     ...state,
        //     leads: updateStateInfo(state.leads, action),
        //     allLeads: updateStateInfo(state.allLeads, action)
        //   }
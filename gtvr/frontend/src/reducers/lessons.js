import { GET_LESSONS, DELETE_LESSON, ADD_LESSON, UPDATE_LESSON, GET_VIDEO } from '../actions/types.js'

const initialState = {
    lessons: [],
    video: []
}

// set lesson
// let updateStateInfo = (stateArray, action) => {
//   let updatedLesson = []
//   stateArray.filter(lesson => {
//     if (lesson.id === action.payload.id) {
//         updatedLesson = [...updatedLesson, action.payload]
//     } else {
//         updatedLesson = [...updatedLesson, lesson]
//     }
//   })
//   return updatedLesson
// }

export default function(state = initialState, action) {
    // common convetion is to use a switch with cases
    switch(action.type) {
        case GET_LESSONS:
            return {
                ...state,
                lessons: action.payload
            }
        case GET_VIDEO:
            return {
                ...state,
                video: action.payload
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
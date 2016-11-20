import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action){
    switch (action.type) {
        case types.CREATE_COURSE:
            return [...state, Object.assign({}, action.course)];        // spreads the state, makes a deep copy and replaces its action property with the new value
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}
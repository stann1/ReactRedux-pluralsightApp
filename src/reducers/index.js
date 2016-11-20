import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses                 // in EC6 if right and left hand match, left-hand can be ommited, so course is the same as course: course
});

export default rootReducer;
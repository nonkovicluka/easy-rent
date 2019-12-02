import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import auth from './auth';
import accommodation from './accommodation';
import room from './room';
import formMessage from './formMessage';

export default combineReducers({
    auth,
    accommodation,
    room,
    formMessage,
    form: formReducer
});

import { FORM_MESSAGE, MESSAGE_CLEAR } from '../actions/types';

const INITIAL_STATE = {
    alert: null
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case FORM_MESSAGE:
            return { ...state, alert: action.payload }

        case MESSAGE_CLEAR:
            return { ...state, alert: action.payload }

        default:
            return state
    }

}
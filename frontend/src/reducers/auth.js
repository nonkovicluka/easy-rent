import { AUTH_USER, USERS, BAN_USER } from '../actions/types';

const INITIAL_STATE = {
    token: '',
    users: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case AUTH_USER:
            return { ...state, token: action.payload }

        case USERS:
            return { ...state, users: action.payload }

        case BAN_USER:

            const newUsers = state.users.filter(user => user.id !== action.payload);

            return { ...state, users: newUsers }

        default:
            return state
    }

}

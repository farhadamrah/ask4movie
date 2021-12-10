import * as TYPES from '../types';
import { authFirebase } from '../../firebase';

const initialState = {
    isAuthenticated: false,
    user: [],
    // currentUser: [],
};

const auth = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case TYPES.AUTH_USER_SIGNED_IN: {
            return { ...state, isAuthenticated: true, user: payload };
        }

        case TYPES.AUTH_USER_SIGNED_OUT: {
            return { ...state, isAuthenticated: false, user: payload };
        }

        case TYPES.AUTH_USER_SIGNED_UP: {
            return { ...state, isAuthenticated: true, user: payload };
        }

        case TYPES.SET_AUTH_CURRENT_USER: {
            return { ...state, user: payload };
        }

        default:
            return state;
    }
};

export default auth;

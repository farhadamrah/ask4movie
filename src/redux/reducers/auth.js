import * as TYPES from '../types';

const initialState = {
    isAuthenticated: false,
    user: {},
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.AUTH_USER_LOGGED_IN: {
            return { isAuthenticated: true, user: action.payload };
        }

        case TYPES.AUTH_USER_LOGGED_OUT: {
            return { isAuthenticated: false, user: {} };
        }

        default:
            return state;
    }
};

export default auth;

import * as TYPES from '../types';

export const setUserLoggedIn = user => ({
    type: TYPES.AUTH_USER_LOGGED_IN,
    payload: user,
});

export const setUserLoggedOut = () => ({
    type: TYPES.AUTH_USER_LOGGED_OUT,
});

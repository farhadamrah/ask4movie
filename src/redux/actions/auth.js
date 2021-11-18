import * as TYPES from '../type';

export const setUserLoggedIn = user => ({
    type: TYPES.AUTH_USER_LOGGED_IN,
    payload: user,
});

export const setUserLoggedOut = () => ({
    type: TYPES.AUTH_USER_LOGGED_OUT,
});

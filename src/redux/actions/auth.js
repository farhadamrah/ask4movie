import * as TYPES from '../types';
import AuthService from '../../services/AuthService';
import { showMessageComponent } from './components';
import { MESSAGE_TYPES } from '../../config/constants';

const setUserSignedUp = user => ({
    type: TYPES.AUTH_USER_SIGNED_UP,
    payload: user,
});

const setUserSignedIn = user => ({
    type: TYPES.AUTH_USER_SIGNED_IN,
    payload: user,
});

const setUserSignedOut = () => ({
    type: TYPES.AUTH_USER_SIGNED_OUT,
});

const setUpdateCurrentUser = user => ({
    type: TYPES.SET_AUTH_CURRENT_USER,
    payload: user,
});

export const userSignedUp = values => async dispatch => {
    try {
        const response = await AuthService.signup(values);

        dispatch(setUserSignedUp(response));
    } catch (error) {
        console.log(error.message);
    }
};

export const userSignedIn = values => async dispatch => {
    try {
        const response = await AuthService.signin(values);

        const { accessToken, ...user } = response;

        dispatch(setUserSignedIn(user));

        return user;
    } catch (error) {
        console.log(error.message);

        dispatch(showMessageComponent(MESSAGE_TYPES.error, error.message));
    }
};

export const userSignedOut = () => async dispatch => {
    try {
        const response = await AuthService.signout();

        dispatch(setUserSignedOut(response));
    } catch (error) {
        console.log(error.message);
    }
};

export const updateCurrentUser = () => async dispatch => {
    try {
        const response = await AuthService.updateCurrentUser();

        dispatch(setUpdateCurrentUser(response));
    } catch (error) {
        console.log(error.message);
    }
};

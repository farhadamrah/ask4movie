import { authFirebase } from '../firebase';

const AuthService = {};

AuthService.signup = async values => {
    const { email, password } = values;

    const result = await authFirebase.createUserWithEmailAndPassword(email, password);

    return result;
};

AuthService.signin = async values => {
    const { email, password } = values;

    const result = await authFirebase.signInWithEmailAndPassword(email, password);

    return result.user;
};

AuthService.signout = async () => {
    const result = await authFirebase.signOut();

    return result;
};

AuthService.updateCurrentUser = async () => {
    const result = await authFirebase.onAuthStateChanged(user => user);

    return result;
};

export default AuthService;

import { combineReducers } from 'redux';
import auth from './auth';
import movies from './movies';
import components from './components';

const rootReducer = combineReducers({
    auth,
    movies,
    components,
});

export default rootReducer;

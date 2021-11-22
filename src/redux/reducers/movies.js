import * as TYPES from '../types';

const initialState = {
    allMovies: [],
    selectedMovie: [],
    watchlist: [],
    searchedMovie: [],
};

const movies = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_ALL_MOVIES: {
            return { ...state, allMovies: action.payload };
        }

        case TYPES.GET_MOVIE_DETAIL: {
            return { ...state, selectedMovie: action.payload };
        }

        case TYPES.DELETE_SELECTED_MOVIE_DETAIL: {
            return { ...state, selectedMovie: [] };
        }

        case TYPES.ADD_MOVIE_TO_WATCHLIST: {
            return { ...state, watchlist: [...state.watchlist, action.payload] };
        }

        case TYPES.REMOVE_MOVIE_FROM_WATCHLIST: {
            return {
                ...state,
                watchlist: state.watchlist.filter(item => item.id !== action.payload),
            };
        }

        case TYPES.GET_SEARCHED_MOVIE: {
            return { ...state, searchedMovie: action.payload };
        }

        default:
            return state;
    }
};

export default movies;

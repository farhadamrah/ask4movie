import * as TYPES from '../types';
import MoviesService from '../../services/MoviesService';

export const setAllMoviesList = list => ({ type: TYPES.GET_ALL_MOVIES, payload: list });

export const setMovieDetail = movie => ({ type: TYPES.GET_MOVIE_DETAIL, payload: movie });

export const deleteSelectedMovieDetail = () => ({ type: TYPES.DELETE_SELECTED_MOVIE_DETAIL });

export const addMovieToWatchlist = movie => ({ type: TYPES.ADD_MOVIE_TO_WATCHLIST, payload: movie });

export const removeMovieFromWatchlist = id => ({ type: TYPES.REMOVE_MOVIE_FROM_WATCHLIST, payload: id });

export const setSearchedMovie = movie => ({ type: TYPES.GET_SEARCHED_MOVIE, payload: movie });

export const removeSearchedMovies = () => ({ type: TYPES.REMOVE_SEARCHED_MOVIES });

export const getAllMoviesList = () => async dispatch => {
    try {
        const response = await MoviesService.getAllMovies();

        const movies = response.results;

        dispatch(setAllMoviesList(movies));
    } catch (error) {
        console.log(error);
    }
};

export const getMovieDetail = id => async dispatch => {
    try {
        const response = await MoviesService.getMovieDetail(id);

        dispatch(setMovieDetail(response));
    } catch (error) {
        console.log(error);
    }
};

export const getSearchedMovie = query => async dispatch => {
    try {
        const response = await MoviesService.searchMovie(query);

        const searchedMovie = response.results;

        dispatch(setSearchedMovie(searchedMovie));
    } catch (error) {
        console.log(error);
    }
};

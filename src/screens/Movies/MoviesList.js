import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import styles from './MoviesList.module.scss';
import Input from '../../components/shared/Input/Input';
import { getSearchedMovie, getTopMoviesList } from '../../redux/actions/movies';
import Button from '../../components/shared/Button/Button';
import { Link, Route } from 'react-router-dom';
import { ROUTES } from '../../config/constants';
import AllMovies from './AllMovies/AllMovies';
import Movie from './Movie/Movie';
import WatchList from './WatchList/WatchList';
import SearchMovie from './SearchMovie/SearchMovie';
import NavMenu from '../../components/NavMenu/NavMenu';

const MoviesList = props => {
    // const dispatch = useDispatch();

    // const topMovies = useSelector(state => state.movies.topMovies);
    // const searchedMovie = useSelector(state => state.movies.searchedMovie);
    //
    // const movies = searchedMovie.length > 0 ? searchedMovie : topMovies;

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();

    // useEffect(() => {
    //     dispatch(getTopMoviesList());
    // }, []);

    // const onSubmit = query => {
    //     useEffect(() => {
    //         const timer = setTimeout(() => dispatch(getSearchedMovie(query)), 200);
    //     }, [query]);
    // };

    // const onSubmit = searchTerm => {
    //     const query = JSON.stringify(searchTerm.search);
    //     console.log(query);
    //
    //     dispatch(getSearchedMovie(query));
    // };

    return (
        <div className={styles.container}>
            {/*<NavMenu />*/}

            <Route exact path={ROUTES.allMovies.path} component={AllMovies} />
            <Route exact path={ROUTES.watchList.path} component={WatchList} />
            <Route exact path={ROUTES.searchMovie.path} component={SearchMovie} />
        </div>
    );
};

MoviesList.propTypes = {};

export default MoviesList;

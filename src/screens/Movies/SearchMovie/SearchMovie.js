import PropTypes from 'prop-types';
import styles from './SearchMovie.module.scss';
import { addMovieToWatchlist, getSearchedMovie, removeSearchedMovies } from '../../../redux/actions/movies';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../../components/shared/Input/Input';
import { Link } from 'react-router-dom';
import { IMAGE_URL, ROUTES } from '../../../config/constants';
import Button from '../../../components/shared/Button/Button';
import { useCallback, useEffect } from 'react';

const SearchMovie = props => {
    const dispatch = useDispatch();

    const searchedMovie = useSelector(state => state.movies.searchedMovie);
    const watchlist = useSelector(state => state.movies.watchlist);

    const hasSearchedMovie = searchedMovie.length > 0;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = searchTerm => {
        const query = JSON.stringify(searchTerm.search);

        dispatch(getSearchedMovie(query));
    };

    useEffect(() => {
        return () => dispatch(removeSearchedMovies());
    }, []);

    const addMovieHandler = selectedMovie => {
        dispatch(addMovieToWatchlist(selectedMovie));
    };

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input.Search placeholder={'Search'} {...register('search')} className={styles.input} />
            </form>

            {!hasSearchedMovie && <div className={styles.message}>Not found any movie.</div>}

            <div className={styles.container}>
                {searchedMovie.map(movie => {
                    let addedMovie = watchlist.find(watchlistMovie => watchlistMovie.id === movie.id);

                    return (
                        <div key={movie.id} className={styles.card}>
                            <div className={styles.overlay}>
                                <span className={styles.title}>{movie.title}</span>

                                {!addedMovie ? (
                                    <span className={styles.add} onClick={() => addMovieHandler(movie)}>
                                        Add Watchlist
                                    </span>
                                ) : (
                                    <span className={styles.added}>Added</span>
                                )}

                                <Link to={`${ROUTES.allMovies.path}/${movie.id}`}>
                                    <Button className={styles.more}>More</Button>
                                </Link>
                            </div>
                            <img src={`${IMAGE_URL.url}/${movie.poster_path}`} alt={movie.title} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

SearchMovie.propTypes = {};

export default SearchMovie;

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './AllMovies.module.scss';
import { IMAGE_URL, ROUTES } from '../../../config/constants';
import { getAllMoviesList, addMovieToWatchlist } from '../../../redux/actions/movies';
import Button from '../../../components/shared/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye, faEyeSlash, faHeart, faList } from '@fortawesome/free-solid-svg-icons';

const AllMovies = props => {
    const [addIsEnable, setAddIsEnable] = useState(true);

    const dispatch = useDispatch();

    const allMovies = useSelector(state => state.movies.allMovies);
    const watchlist = useSelector(state => state.movies.watchlist);

    useEffect(() => {
        dispatch(getAllMoviesList());
    }, []);

    const addMovieHandler = selectedMovie => {
        // const addedMovie = watchlist.find(movie => movie.id === selectedMovie.id);
        dispatch(addMovieToWatchlist(selectedMovie));

        // if (addedMovie) {
        //     setAddIsEnable(false);
        // } else {
        //     setAddIsEnable(false);
        // }
    };

    return (
        <div className={styles.container}>
            {allMovies.map(movie => {
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
    );
};

AllMovies.propTypes = {};

export default AllMovies;

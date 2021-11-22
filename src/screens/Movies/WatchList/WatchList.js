import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import styles from './WatchList.module.scss';
import { Link } from 'react-router-dom';
import { IMAGE_URL, ROUTES } from '../../../config/constants';
import Button from '../../../components/shared/Button/Button';
import { removeMovieFromWatchlist } from '../../../redux/actions/movies';

const WatchList = props => {
    const dispacth = useDispatch();

    const watchlist = useSelector(state => state.movies.watchlist);

    const hasWatchlist = Object.keys(watchlist).length > 0;

    const removeMovieHandler = id => {
        dispacth(removeMovieFromWatchlist(id));
    };

    return (
        <>
            {!hasWatchlist && <div className={styles.message}>There is no any movie</div>}

            <div className={styles.container}>
                {watchlist.map(movie => {
                    return (
                        <div key={movie.id} className={styles.card}>
                            <div className={styles.overlay}>
                                <span className={styles.title}>{movie.title}</span>

                                <span className={styles.remove} onClick={() => removeMovieHandler(movie.id)}>
                                    Remove
                                </span>

                                <Link to={`${ROUTES.allMovies.path}/${movie.id}`}>
                                    <Button className={styles.more}>More</Button>
                                </Link>
                            </div>
                            <img src={`${IMAGE_URL.url}/${movie.poster_path}`} alt={movie.title} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

WatchList.propTypes = {};

export default WatchList;

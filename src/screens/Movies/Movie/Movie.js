import PropTypes from 'prop-types';
import styles from './Movie.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteSelectedMovieDetail, getMovieDetail } from '../../../redux/actions/movies';
import { IMAGE_URL } from '../../../config/constants';

const Movie = props => {
    const dispatch = useDispatch();

    const movie = useSelector(state => state.movies.selectedMovie);
    const { title, overview, vote_average, backdrop_path, poster_path, original_language, genres } = movie;

    console.log(movie);

    const { movieId } = useParams();

    useEffect(() => {
        movieId && movieId !== '' && dispatch(getMovieDetail(movieId));

        return () => dispatch(deleteSelectedMovieDetail());
    }, []);

    const hasMovie = Object.keys(movie).length > 0;

    let categories;
    if (hasMovie) {
        categories = (
            <>
                {genres.map((item, index) => (
                    <span key={index}>{`${item.name} | `}</span>
                ))}
            </>
        );
    }

    return (
        <>
            {!hasMovie ? (
                <h2>Loading...</h2>
            ) : (
                <div className={styles.container}>
                    <div className={styles.description}>
                        <img src={`${IMAGE_URL.url}/${poster_path}`} alt={title} />
                        <div className={styles.categories}>
                            <p>
                                <span className={styles.keys}> Name:</span>
                                <span className={styles.values}>{title}</span>
                            </p>
                            <p>
                                <span className={styles.keys}> Rating: </span>
                                <span className={styles.values}>{vote_average}</span>
                            </p>
                            <p>
                                <span className={styles.keys}> Language: </span>
                                <span className={styles.values}>{original_language.toUpperCase()}</span>
                            </p>
                            <p>
                                <span className={styles.keys}> Category: </span>
                                <span className={styles.values}>{categories}</span>
                            </p>
                        </div>
                    </div>

                    <p className={styles.overview}>
                        <span>Overview:</span> {overview}
                    </p>

                    <img src={`${IMAGE_URL.url}/${backdrop_path}`} alt={title} />
                </div>
            )}
        </>
    );
};

Movie.propTypes = {};

export default Movie;

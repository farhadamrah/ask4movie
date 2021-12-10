import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import styles from './MoviesList.module.scss';
import { ROUTES } from '../../config/constants';
import AllMovies from './AllMovies/AllMovies';
import WatchList from './WatchList/WatchList';
import SearchMovie from './SearchMovie/SearchMovie';

const MoviesList = props => {
    return (
        <div className={styles.container}>
            <Route exact path={ROUTES.allMovies.path} component={AllMovies} />
            <Route exact path={ROUTES.watchList.path} component={WatchList} />
            <Route exact path={ROUTES.searchMovie.path} component={SearchMovie} />
        </div>
    );
};

MoviesList.propTypes = {};

export default MoviesList;

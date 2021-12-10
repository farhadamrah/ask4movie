import { Redirect, Switch } from 'react-router-dom';

import { ROUTES } from '../../config/constants';
import PrivateRoute from '../shared/PrivateRoute/PrivateRoute';
import AllMovies from '../../screens/Movies/AllMovies/AllMovies';
import Movie from '../../screens/Movies/Movie/Movie';
import WatchList from '../../screens/Movies/WatchList/WatchList';
import SearchMovie from '../../screens/Movies/SearchMovie/SearchMovie';
import { useSelector } from 'react-redux';

const PrivateRoutes = props => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <Switch>
            <PrivateRoute exact path={ROUTES.allMovies.path} component={AllMovies} isAuthenticated={isAuthenticated} />
            <PrivateRoute exact path={ROUTES.movie.path} component={Movie} isAuthenticated={isAuthenticated} />
            <PrivateRoute exact path={ROUTES.watchList.path} component={WatchList} isAuthenticated={isAuthenticated} />
            <PrivateRoute
                exact
                path={ROUTES.searchMovie.path}
                component={SearchMovie}
                isAuthenticated={isAuthenticated}
            />
            <Redirect to={ROUTES.signIn.path} />
        </Switch>
    );
};

PrivateRoutes.propTypes = {};

export default PrivateRoutes;

import PropTypes from 'prop-types';
import { Route, useLocation } from 'react-router-dom';

import { isPrivateRoute } from '../../utils/route';
import PublicRoutes from './PublicRoutes';
import Layout from '../Layout/Layout';
import PrivateRoutes from './PrivateRoutes';
import { Switch } from 'react-router-dom';

import { ROUTES } from '../../config/constants';
import SignIn from '../Auth/SignIn/SignIn';
import SignUp from '../Auth/SignUp/SignUp';
import Home from '../../screens/Home/Home';
import MoviesList from '../../screens/Movies/MoviesList';
import AllMovies from '../../screens/Movies/AllMovies/AllMovies';
import WatchList from '../../screens/Movies/WatchList/WatchList';
import SearchMovie from '../../screens/Movies/SearchMovie/SearchMovie';
import Movie from '../../screens/Movies/Movie/Movie';
import NavMenu from '../NavMenu/NavMenu';

const Routes = props => {
    const location = useLocation();

    return (
        <Layout>
            <Switch>
                {!isPrivateRoute(location.pathname) ? (
                    <>
                        <Route exact path={ROUTES.home.path} component={Home} />
                        <Route exact path={ROUTES.signIn.path} component={SignIn} />
                        <Route exact path={ROUTES.signUp.path} component={SignUp} />
                    </>
                ) : (
                    <>
                        <NavMenu />

                        <Route exact path={ROUTES.allMovies.path} component={AllMovies} />
                        <Route exact path={ROUTES.movie.path} component={Movie} />
                        <Route exact path={ROUTES.watchList.path} component={WatchList} />
                        <Route exact path={ROUTES.searchMovie.path} component={SearchMovie} />
                    </>
                )}
            </Switch>
        </Layout>
    );
};

Routes.propTypes = {};

export default Routes;

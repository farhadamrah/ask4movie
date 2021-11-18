import PropTypes from 'prop-types';
import { Route, useLocation } from 'react-router-dom';

import { isPrivateRoute } from '../../utils/route';
import PublicRoutes from './PublicRoutes';
import Layout from '../Layout/Layout';
import PrivateRoutes from './PrivateRoutes';
import { Switch } from 'react-router-dom';

import { ROUTES } from '../../config/constants';
import AuthPage from '../Auth/AuthPage';
import SignIn from '../Auth/SignIn/SignIn';
import SignUp from '../Auth/SignUp/SignUp';
import Home from '../../screens/Home/Home';
import MoviesList from '../../screens/MoviesList/MoviesList';
import AppPages from '../../screens/AppPages/AppPages';

const Routes = props => {
    const location = useLocation();

    return (
        <Layout>
            {/*<PublicRoutes />*/}
            {/*{isPrivateRoute(location.pathname) ? <PrivateRoutes /> : null}*/}

            <Switch>
                {!isPrivateRoute(location.pathname) ? (
                    <AuthPage>
                        <Route exact path={ROUTES.home.path} component={Home} />
                        <Route exact path={ROUTES.signIn.path} component={SignIn} />
                        <Route exact path={ROUTES.signUp.path} component={SignUp} />
                    </AuthPage>
                ) : (
                    <AppPages>
                        <MoviesList />
                    </AppPages>
                )}
            </Switch>
        </Layout>
    );
};

Routes.propTypes = {};

export default Routes;

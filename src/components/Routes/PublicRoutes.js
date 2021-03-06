import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import { ROUTES } from '../../config/constants';
import SignIn from '../Auth/SignIn/SignIn';
import SignUp from '../Auth/SignUp/SignUp';
import Home from '../../screens/Home/Home';

const PublicRoutes = props => {
    return (
        <Switch>
            <Route
                path={[ROUTES.home.path, ROUTES.signIn.path, ROUTES.signUp.path]}
                render={() => (
                    <>
                        <Route exact path={ROUTES.home.path} component={Home} />
                        <Route exact path={ROUTES.signIn.path} component={SignIn} />
                        <Route exact path={ROUTES.signUp.path} component={SignUp} />
                    </>
                )}
            />
        </Switch>
    );
};

PublicRoutes.propTypes = {};

export default PublicRoutes;

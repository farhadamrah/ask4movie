import { Redirect, Route } from 'react-router-dom';
import { ROUTES } from '../../../config/constants';

const PrivateRoute = ({ component: Component, isAuthenticated, redirect: pathname, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => (isAuthenticated ? <Component {...props} {...rest} /> : <Redirect to={pathname} />)}
        />
    );
};

PrivateRoute.defaultProps = { redirect: ROUTES.signIn.path };

export default PrivateRoute;

import { Switch, useLocation } from 'react-router-dom';

import { isPrivateRoute } from '../../utils/route';
import PublicRoutes from './PublicRoutes';
import Layout from '../Layout/Layout';
import PrivateRoutes from './PrivateRoutes';
import Messages from '../global/Messages/Messages';

const Routes = props => {
    const location = useLocation();

    return (
        <Layout>
            <Messages />

            <Switch>{!isPrivateRoute(location.pathname) ? <PublicRoutes /> : <PrivateRoutes />}</Switch>
        </Layout>
    );
};

Routes.propTypes = {};

export default Routes;

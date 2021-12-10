import PropTypes from 'prop-types';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { ROUTES } from '../../config/constants';
import styles from './Header.module.scss';
import Button from '../shared/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { userSignedOut } from '../../redux/actions/auth';
import { isPrivateRoute } from '../../utils/route';

const Header = props => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const redirect = pathname === ROUTES.signIn.path ? ROUTES.signUp.path : ROUTES.signIn.path;

    const buttonName = pathname === ROUTES.signIn.path ? 'Sign Up' : 'Sign In';

    const onSignOutClick = () => {
        dispatch(userSignedOut());

        history.push(ROUTES.signIn.path);
    };

    console.log(isAuthenticated);

    return (
        <header className={styles.header}>
            <div className={styles['header__container']}>
                <Link to={isPrivateRoute(pathname) ? ROUTES.allMovies.path : ROUTES.home.path}>
                    <span className={styles.logo}>ASK4MOVIE</span>
                </Link>

                {!isPrivateRoute(pathname) ? (
                    <Link to={redirect}>
                        <Button type={'primary'}>{buttonName}</Button>
                    </Link>
                ) : (
                    <Button type={'primary'} onClick={onSignOutClick}>
                        Sign Out
                    </Button>
                )}
            </div>
        </header>
    );
};

Header.propTypes = {};

export default Header;

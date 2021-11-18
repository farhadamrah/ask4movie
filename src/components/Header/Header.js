import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import { ROUTES } from '../../config/constants';
import styles from './Header.module.scss';
import Button from '../shared/Button/Button';
import { useSelector } from 'react-redux';

const Header = props => {
    const { pathname } = useLocation();

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    let buttonName;

    const link = pathname === ROUTES.signIn.path ? ROUTES.signUp.path : ROUTES.signIn.path;

    !isAuthenticated
        ? (buttonName = pathname === ROUTES.signIn.path ? 'Sign Up' : 'Sign In')
        : (buttonName = 'Sign Out');

    return (
        <header className={styles.header}>
            <div className={styles['header__container']}>
                <Link to={ROUTES.home.path}>
                    <span className={styles.logo}>ASK4MOVIE</span>
                </Link>
                <Link to={link}>
                    <Button type={'primary'}>{buttonName}</Button>
                </Link>
            </div>
        </header>
    );
};

Header.propTypes = {};

export default Header;

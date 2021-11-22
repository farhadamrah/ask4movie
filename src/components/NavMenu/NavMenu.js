import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './NavMenu.module.scss';
import { ROUTES } from '../../config/constants';

const NavMenu = props => {
    return (
        <div className={styles.menu}>
            <NavLink activeClassName={styles.active} className={styles.item} to={ROUTES.allMovies.path}>
                All Movies
            </NavLink>
            <NavLink activeClassName={styles.active} className={styles.item} to={ROUTES.watchList.path}>
                Watchlist
            </NavLink>
            <NavLink activeClassName={styles.active} className={styles.item} to={ROUTES.searchMovie.path}>
                Search
            </NavLink>
        </div>
    );
};

NavMenu.propTypes = {};

export default NavMenu;

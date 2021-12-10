import PropTypes from 'prop-types';
import Header from '../Header/Header';
import styles from './Layout.module.scss';
import { isPrivateRoute } from '../../utils/route';
import { useLocation } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';

const Layout = props => {
    const { pathname } = useLocation();
    return (
        <>
            <div className={styles.layout}>
                <div className={styles.background} />
                <Header />
                <main className={styles.main}>
                    {isPrivateRoute(pathname) && <NavMenu />}
                    {props.children}
                </main>
            </div>
        </>
    );
};

Layout.propTypes = {};

export default Layout;

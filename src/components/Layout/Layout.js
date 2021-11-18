import PropTypes from 'prop-types';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

const Layout = props => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>{props.children}</main>
        </div>
    );
};

Layout.propTypes = {};

export default Layout;

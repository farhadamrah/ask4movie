import PropTypes from 'prop-types';
import styles from './AppPages.module.scss';

const AppPages = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

AppPages.propTypes = {};

export default AppPages;

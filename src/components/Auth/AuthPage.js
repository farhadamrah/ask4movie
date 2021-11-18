import PropTypes from 'prop-types';
import styles from './AuthPage.module.scss';

const AuthPage = props => {
    return (
        <>
            <div className={styles['auth-background']}>
                <div className={styles.container}>{props.children}</div>
            </div>
        </>
    );
};

AuthPage.propTypes = {};

export default AuthPage;

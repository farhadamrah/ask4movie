import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import Button from '../../components/shared/Button/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/constants';

const Home = props => {
    return (
        <div className={styles.home}>
            <span className={styles.title}>Unlimited movies, TV shows, and more.</span>
            <span className={styles.subtitle}>Everything you are looking for is here.</span>
            <span className={styles['invite-text']}>Are you ready?</span>
            <Link to={ROUTES.signUp.path}>
                <Button type={'primary'} customStyle={{ width: '200px', fontSize: '1.05rem' }}>
                    Join us
                </Button>
            </Link>
        </div>
    );
};

Home.propTypes = {};

export default Home;

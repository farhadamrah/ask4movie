import PropTypes from 'prop-types';

import styles from './MoviesList.module.scss';
import Input from '../../components/shared/Input/Input';

const MoviesList = props => {
    return (
        <div className={styles.container}>
            <Input.Search />
        </div>
    );
};

MoviesList.propTypes = {};

export default MoviesList;

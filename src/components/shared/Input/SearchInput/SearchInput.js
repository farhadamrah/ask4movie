import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SearchInput.module.scss';
import Input from '../Input';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = forwardRef((props, ref) => {
    return (
        <div className={styles.input}>
            <Input ref={ref} {...props} />
            <FontAwesomeIcon icon={faSearch} className={styles.search}>
                search
            </FontAwesomeIcon>
        </div>
    );
});

SearchInput.propTypes = {};

export default SearchInput;

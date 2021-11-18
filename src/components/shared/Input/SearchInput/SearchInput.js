import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import styles from './SearchInput.module.scss';
import Input from '../Input';

const SearchInput = forwardRef((props, ref) => {
    return (
        <div>
            <Input ref={ref} {...props} />
            <span className={styles.search}>search</span>
        </div>
    );
});

SearchInput.propTypes = {};

export default SearchInput;

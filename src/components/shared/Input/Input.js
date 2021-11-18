import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import styles from './Input.module.scss';
import PasswordInput from './PasswordInput/PasswordInput';
import SearchInput from './SearchInput/SearchInput';

const Input = forwardRef((props, ref) => {
    const { customStyle, ...inputProps } = props;

    return <input ref={ref} className={styles.input} style={customStyle} {...inputProps} />;
});

Input.propTypes = {
    customStyle: PropTypes.object,
};

Input.Password = PasswordInput;
Input.Search = SearchInput;

export default Input;

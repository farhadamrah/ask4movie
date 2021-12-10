import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';
import PasswordInput from './PasswordInput/PasswordInput';
import SearchInput from './SearchInput/SearchInput';

const Input = forwardRef((props, ref) => {
    const { className, ...inputProps } = props;

    return <input ref={ref} className={classNames(styles.input, className)} {...inputProps} />;
});

Input.propTypes = {
    customStyle: PropTypes.object,
};

Input.Password = PasswordInput;
Input.Search = SearchInput;

export default Input;

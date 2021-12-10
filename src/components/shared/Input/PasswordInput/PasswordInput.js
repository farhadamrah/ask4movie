import { forwardRef, useState } from 'react';
import styles from './PasswordInput.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Input from '../Input';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordInput = forwardRef((props, ref) => {
    const [passwordIsShown, setPasswordIsShown] = useState(false);

    const onShowPasswordClick = () => {
        setPasswordIsShown(passwordIsShown => !passwordIsShown);
    };

    return (
        <div className={styles['password-input']}>
            <Input ref={ref} type={passwordIsShown ? 'text' : 'password'} {...props} className={styles.input} />
            {passwordIsShown ? (
                <FontAwesomeIcon icon={faEyeSlash} className={styles.hide} onClick={onShowPasswordClick} />
            ) : (
                <FontAwesomeIcon icon={faEye} className={styles.hide} onClick={onShowPasswordClick} />
            )}
        </div>
    );
});

export default PasswordInput;

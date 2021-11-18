import styles from './PasswordInput.module.scss';
import { forwardRef } from 'react';

import Input from '../Input';

const PasswordInput = forwardRef((props, ref) => {
    return (
        <div className={styles['password-input']}>
            <Input ref={ref} {...props} customStyle={{ width: '100%' }} />
            <span className={styles.hide}>hide</span>
        </div>
    );
});

export default PasswordInput;

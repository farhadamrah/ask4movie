import PropTypes from 'prop-types';
import styles from './FormItem.module.scss';

const FormItem = props => {
    const { children, label, hasValidationError, helpMessage, ...formItemProps } = props;

    return (
        <div className={styles['form-item']} {...formItemProps}>
            {label && <label className={styles.label}>{label}</label>}
            {children}
            {hasValidationError && <p className={styles.error}>{helpMessage}</p>}
        </div>
    );
};

FormItem.propTypes = {};

export default FormItem;

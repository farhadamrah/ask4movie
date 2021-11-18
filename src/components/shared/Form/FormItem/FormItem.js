import PropTypes from 'prop-types';
import styles from './FormItem.module.scss';

const FormItem = props => {
    const { children, label, ...formItemProps } = props;

    return (
        <div className={styles['form-item']} {...formItemProps}>
            {label && <label className={styles.label}>{label}</label>}
            {children}
        </div>
    );
};

FormItem.propTypes = {};

export default FormItem;

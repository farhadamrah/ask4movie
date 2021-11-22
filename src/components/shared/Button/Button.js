import PropTypes from 'prop-types';

import styles from './Button.module.scss';
import { BUTTON_TYPES } from '../../../config/constants';
import classnames from 'classnames';

const Button = props => {
    const { children, type, className, ...buttonProps } = props;

    const buttonType = type ? type : 'primary';

    const BUTTON_STYLES = {
        [BUTTON_TYPES.primary]: styles.primaryButton,
        [BUTTON_TYPES.link]: styles.linkButton,
    };

    return (
        <button type={buttonType} className={classnames(BUTTON_STYLES[buttonType], className)} {...buttonProps}>
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
};

export default Button;

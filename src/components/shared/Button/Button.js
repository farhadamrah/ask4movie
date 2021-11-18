import PropTypes from 'prop-types';

import styles from './Button.module.scss';
import { BUTTON_TYPES } from '../../../config/constants';

const Button = props => {
    const { children, type, customStyle, ...buttonProps } = props;

    const buttonType = type ? type : 'primary';

    const BUTTON_STYLES = {
        [BUTTON_TYPES.primary]: styles.primaryButton,
        [BUTTON_TYPES.link]: styles.linkButton,
    };

    return (
        <button type={buttonType} style={customStyle} className={BUTTON_STYLES[buttonType]} {...buttonProps}>
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
};

export default Button;

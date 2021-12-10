import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classnames from 'classnames';

import styles from './Messages.module.scss';

const Messages = props => {
    const message = useSelector(state => state.components.messages);

    console.log(message);

    return Object.keys(message).length > 0 ? (
        <div className={styles.container}>
            <div className={classnames(styles.content, styles[message.type])} key={message.id}>
                <span>{message.message}</span>
            </div>
        </div>
    ) : null;
};

Messages.propTypes = {};

export default Messages;

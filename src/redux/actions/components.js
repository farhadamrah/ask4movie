import * as TYPES from '../types';

export const showMessageComponent =
    (type, message, { duration = 3 } = {}) =>
    dispatch => {
        const messageId = new Date().getTime();

        dispatch({
            type: TYPES.SHOW_MESSAGE_COMPONENT,
            payload: {
                id: messageId,
                type,
                message,
            },
        });

        setTimeout(() => dispatch(destroyMessageComponent(messageId)), duration * 1000);

        return messageId;
    };

export const destroyMessageComponent = messageId => ({
    type: TYPES.DESTROY_MESSAGE_COMPONENT,
    payload: messageId,
});

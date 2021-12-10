import * as TYPES from '../types';

const initialState = {
    messages: [],
};

const messages = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case TYPES.SHOW_MESSAGE_COMPONENT: {
            // console.log(payload);
            return { ...state, messages: payload };
        }

        case TYPES.DESTROY_MESSAGE_COMPONENT: {
            return { ...state, messages: [] };
        }

        default: {
            return state;
        }
    }
};

export default messages;

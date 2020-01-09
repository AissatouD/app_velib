import
    ADD_MESSAGE_ACTION
 from '../actions/actionType';

const INITIAL_STATE = {
    messages: [],
    loading: false,
    error: null
};

const messages = (state = INITIAL_STATE, action)=> {
    switch (action.type) {
        case ADD_MESSAGE_ACTION:
            return {
                messages: [
                    ...state.messages,
                    {messages: action.message, username: action.username}
                ]
            };
        default:
            return state;
    }

};

export default messages;

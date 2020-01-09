import
    ADD_MESSAGE_ACTION
    from './actionType';

export const addMessage = (message, username)=> {
    return {
        type: ADD_MESSAGE_ACTION,
        message,
        username
    };
};

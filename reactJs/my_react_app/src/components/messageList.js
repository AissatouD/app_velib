
import React from 'react';
import {MessageItem} from './messageItem';
import { useSelector } from 'react-redux';

const MessageList = () => {

    const messages = useSelector(state =>
        state.messages.messages);

    return (
        <ul>
            { messages.map((message, i) => {
                return (
                    <MessageItem
                        key={i}
                        username={message.username}
                        message={message.message}
                    />
                )
            }) }

        </ul>
    );

};
export default MessageList;

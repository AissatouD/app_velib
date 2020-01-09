import React, {useState} from "react";
import PropTypes from 'prop-types';
import MessageList from "./messageList";
import MessageBar from "./messageBar";
import styled from "styled-components";



const Div = styled.div`

  border: 2px solid palevioletred;
  background-color: gray
  height: 100%;
  width: 30%;
 
`;

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const handleMessageSubmit = message => {
        const newMessage = { message: message, username: "Aiss" };
        console.log(messages);
        setMessages([...messages, newMessage]);

    };

    return (
        <Div>
            <div>Mon Chat <span role={"img"} aria-label={""} >🐰🐹</span></div>
            <MessageList messages={messages} />
            <MessageBar handleMessageSubmit={handleMessageSubmit}/>
        </Div>
    );
};

MessageBar.propTypes = {
    handleMessageSubmit: PropTypes.func.isRequired
};

/*const mapDispatchToProps = dispatch => {
    return {
        getMessages: dispatch(getMessages())
    }
};*/

export default Chat;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider }  from 'react-redux';
import Chat from './components/chat';
import reducers from './reducers/index';
import {  createStore } from "redux";

const store = createStore(
    reducers
   /* compose(
        applyMiddleware(thunk),
        window.devToolsExtentions ? window.devToolsExtentions(): f => f
    )*/
);

ReactDOM.render(
    <Provider store ={store}>
        <Chat/>
    </Provider>,
    document.getElementById('root')
);





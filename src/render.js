import ReactDOM from "react-dom";
import React from "react";
import {App} from "./App";
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import './index.css';

export const rerenderEntireTree = state => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>
        ,
        document.getElementById('root'))
}

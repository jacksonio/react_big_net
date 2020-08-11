import * as serviceWorker from './serviceWorker';
import store  from './redux/store'
import ReactDOM from "react-dom";
import React from "react";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import './index.css';

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
        ,
        document.getElementById('root'))
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)



serviceWorker.unregister();

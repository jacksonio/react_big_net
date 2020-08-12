import * as serviceWorker from './serviceWorker';
import store  from './redux/redux-store'
import ReactDOM from "react-dom";
import React from "react";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {StoreContext} from "./StoreContext";
import './index.css';

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            <App store={store} />
            </StoreContext.Provider>
        </BrowserRouter>
        ,
        document.getElementById('root'))
}

rerenderEntireTree(store.getState())

store.subscribe(() =>  {
    let state = store.getState()
    rerenderEntireTree(state)
})



serviceWorker.unregister();

import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import ReactDOM from "react-dom";
import React from "react";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'))


serviceWorker.unregister();

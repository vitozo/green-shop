import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom";
import store from "./redux/store.ts"

//Mock_server
import {makeServer} from "./mock_server_greenShop/server";
import {Provider} from "react-redux";
if (process.env.NODE_ENV === "development") {
    makeServer({ environment: "development" })
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store = {store}>
            <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

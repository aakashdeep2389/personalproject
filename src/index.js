import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './Routes';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "../node_modules/locomotive-scroll/dist/locomotive-scroll.css";
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import Reducer from './_reducer/_Reducer18sep'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const persistConfig = {
    key: "root",
    storage,
};

const pReducer = persistReducer(persistConfig, Reducer);

const CM_Store = createStore(pReducer, applyMiddleware(thunk));
const persistor = persistStore(CM_Store);

ReactDOM.render(<Provider store={CM_Store}>
    <Routes/></Provider> , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





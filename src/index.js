import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProvideSocket} from "./use-socket";

ReactDOM.render(
    <ProvideSocket>
        <App/>
    </ProvideSocket>
    ,
    document.getElementById('root')
);


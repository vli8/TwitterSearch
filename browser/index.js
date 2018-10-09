import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {HashRouter, Route, Switch} from 'react-router-dom'


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('main')
)
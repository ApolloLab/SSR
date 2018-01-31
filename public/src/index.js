'use strict'
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import LoginComponent from './components/qinqi/LoginComponent.js';
import MyComponent from './components/liushuo/MyComponent.js';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <LoginComponent />
                <MyComponent/>
            </div>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)
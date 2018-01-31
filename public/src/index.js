'use strict'
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import LoginComponent from './components/qinqi/LoginComponent.js';
import HomeComponent from './components/doujinlan/components/HomeComponent.js'


export default class App extends React.Component {
    render() {
        return (
            <div>
                <HomeComponent />
            </div>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)
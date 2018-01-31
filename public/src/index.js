'use strict'
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import LoginComponent from './components/qinqi/LoginComponent.js';
import FindObjComponent from './components/luzhaopan/FindObjComponent.js'
import ObjConditionComponent from './components/luzhaopan/ObjConditionComponent.js'


export default class App extends React.Component {
    render() {
        return (
            <div>

                <FindObjComponent/>
                <ObjConditionComponent/>

            </div>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)
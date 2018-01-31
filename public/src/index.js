'use strict'
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Route, Router, BrowserRouter, Switch, Link} from 'react-router-dom';
import LoginComponent from './components/qinqi/LoginComponent.js';
import HomeComponent from './components/doujinlan/components/HomeComponent.js'
import FindProject from './components/qinqi/FindProject';
import ReleaseProject from './components/qinqi/ReleaseProject';
import logo from '../images/ssr.jpg';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav className="navbar navbar-default navbar-fixed-top index-nav-layout" role="navigation">
                    <ul className="nav nav-tabs col-md-11 index-nav-layout-ul">
                        <li role="presentation" className="col-md-1 index-nav-layout-li">
                            <img src={logo} alt="logo" style={{width:"100px",height:"60px"}}/>
                        </li>
                        <li role="presentation" className="col-md-2 index-nav-layout-li">
                            <Link to="/" className="index-nav-layout-a" >主页</Link>
                        </li>
                        <li role="presentation" className="col-md-2 index-nav-layout-li">
                            <Link to="/find" className="index-nav-layout-a" >发现项目</Link>
                        </li>
                        <li role="presentation" className="col-md-2 index-nav-layout-li">
                            <Link to="/release" className="index-nav-layout-a">发布项目</Link>
                        </li>
                        <li role="presentation" className="col-md-3 index-nav-layout-li">
                            <input type="text" placeholder="搜索"/>
                        </li>
                        <li role="presentation" className="col-md-2 index-nav-layout-li">
                            <Link to="/login" className="index-nav-layout-a">登陆</Link>
                        </li>
                    </ul>
                </nav>
                    <div>
                        <Switch>
                            <Route exact path="/" component={HomeComponent}/>
                            <Route path="/find" component={FindProject}/>
                            <Route path="/release" component={ReleaseProject}/>
                            <Route path="/login" component={LoginComponent}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)
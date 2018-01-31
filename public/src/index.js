'use strict'
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Route, Router, BrowserRouter, Switch, Link} from 'react-router-dom';
import LoginComponent from './components/qinqi/LoginComponent.js';
<<<<<<< HEAD
import HomeComponent from './components/doujinlan/components/HomeComponent.js'
=======
import Home from './components/qinqi/Home';
import FindProject from './components/qinqi/FindProject';
import ReleaseProject from './components/qinqi/ReleaseProject';
import logo from '../images/ssr.jpg';
>>>>>>> qinqi


export default class App extends Component {
    render() {
        return (
<<<<<<< HEAD
            <div>
                <HomeComponent />
            </div>
=======
            <BrowserRouter>
                <div>
                    <nav className="navbar navbar-default navbar-fixed-top index-nav-layout" role="navigation">
                    <ul className="nav nav-tabs col-md-11">
                        <li role="presentation" className="col-md-2">
                            <img src={logo} alt="logo" style={{width:"100px",height:"60px"}}/>
                        </li>
                        <li role="presentation" className="col-md-2">
                            <Link to="/find">发现项目</Link>
                        </li>
                        <li role="presentation" className="col-md-2">
                            <Link to="/release">发布项目</Link>
                        </li>
                        <li role="presentation" className="col-md-4">
                            <input type="text" placeholder="搜索"/>
                        </li>
                        <li role="presentation" className="col-md-2">
                            <Link to="/login">登陆</Link>
                        </li>
                    </ul>
                </nav>
                    {/*<nav className="row" style={{fontSize: "18px"}}>*/}
                    {/*<div className="col-md-6">*/}
                    {/*<img className="col-md-4" src={logo} alt="ssrLogo"*/}
                    {/*style={{width: "100px", height: "60px"}}/>*/}

                    {/*<Link className="col-md-4" to="/find">*/}
                    {/*发现项目*/}
                    {/*</Link>*/}

                    {/*<Link className="col-md-4" to="/release">*/}
                    {/*发布项目*/}
                    {/*</Link>*/}
                    {/*<ul className="nav nav-tabs">*/}
                    {/*<li role="presentation" className="active"><a href="#">发现项目</a></li>*/}
                    {/*<li role="presentation"><a href="#">发布项目</a></li>*/}
                    {/*</ul>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-6">*/}
                    {/*<input className="col-md-6" type="text" value=""/>*/}
                    {/*<Link to="/login" className="com-md-6">*/}
                    {/*登陆*/}
                    {/*</Link>*/}
                    {/*</div>*/}
                    {/*</nav>*/}
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/find" component={FindProject}/>
                            <Route path="/release" component={ReleaseProject}/>
                            <Route path="/login" component={LoginComponent}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
>>>>>>> qinqi
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)
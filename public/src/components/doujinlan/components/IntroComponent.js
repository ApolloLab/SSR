import React, { Component } from 'react';
import "../doujinlan.css"

export default class IntroComponent extends Component{
    constructor() {
        super();
        this.state = {
            totalPrice: 555545645,
            supportNum: 5555,
            activeProj: 1234
        }
    }
    render(){
        return(
            <div className="intro">
                <div className="intro-img">
                    <img src={require("../../../../images/intro.jpg")} alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-xs-6">
                            <p>January 20, 2018<br /><strong>Bringing creative projects to life.</strong></p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-xs-6">
                            <p>总结支持金额：<br /><strong>{this.state.totalPrice}</strong></p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-xs-6">
                            <p>已成功支持项目：<br /><strong>{this.state.supportNum}</strong></p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-xs-6">
                            <p>活跃项目：<br /><strong>{this.state.activeProj}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
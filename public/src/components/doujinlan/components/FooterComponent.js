import React, { Component } from 'react';
import "../doujinlan.css"

export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-xs-6">
                            <ul className="footer-cont">
                                <li className="footer-title">关于</li>
                                <li><a href="#">关于我们</a></li>
                                <li><a href="#">联系我们</a></li>
                                <li><a href="#">加入我们</a></li>
                                <li><a href="#">家长监护服务</a></li>
                                <li><a href="#">品牌资源</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-xs-6">
                            <ul className="footer-cont">
                                <li className="footer-title">帮助</li>
                                <li><a href="#">常见问题</a></li>
                                <li><a href="#">项目规范</a></li>
                                <li><a href="#">支持者指南</a></li>
                                <li><a href="#">项目发起指南</a></li>
                                <li><a href="#">众筹项目发起流程</a></li>
                                <li><a href="#">众筹资质要求</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-xs-6">
                            <ul className="footer-cont">
                                <li className="footer-title">条款</li>
                                <li><a href="#">用户注册协议</a></li>
                                <li><a href="#">发起协议</a></li>
                                <li><a href="#">支持者协议</a></li>
                                <li><a href="#">隐私权政策</a></li>
                                <li><a href="#">结算和退款流程</a></li>
                                <li><a href="#">众筹协议</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-xs-6">
                            <ul className="footer-cont">
                                <li className="footer-title">条款</li>
                                <li><a href="#">用户注册协议</a></li>
                                <li><a href="#">发起协议</a></li>
                                <li><a href="#">支持者协议</a></li>
                                <li><a href="#">隐私权政策</a></li>
                                <li><a href="#">结算和退款流程</a></li>
                                <li><a href="#">众筹协议</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
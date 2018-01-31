import React, {Component} from 'react';

import ObjConditionComponent from './ObjConditionComponent';
import './luzhaopan.css'


export default class FindObjComponent extends Component {
    render() {
        return (
            <div class="row ">
                <div className="col-m-12 ">
                    <div className="col-m-12">
                        <div class="row">
                            <div className="col-md-7 FindObjComponent-object" style={{textAlign: "center"}}>
                                <div className="col-m-12">
                                    <h1>《少年锦衣卫》周边筹计划</h1>
                                </div>
                                <div className="col-m-12">
                                    <img src={require('../../../images/1.jpg')} alt=""/>
                                </div>
                                <div className="col-m-12">
                                    <h1>
                                        项目概况是指在介绍或论述某个项目时,首先综合性地简要介绍项目的基本情况。比如一个招商项目,它比一般项目概况的内容较全面,包括项目建设内容、建设规模、投资总额、市场前景、经济效益、社会效益、地理位置、交通条件、气候环境、人文环境、优惠政策等内容。</h1>
                                </div>
                            </div>
                            <div className="col-md-5 right-cont">
                                <div className="col-m-12">
                                    <div class="row">
                                        <div className="col-m-8">
                                            <h1>发起人用户名</h1>
                                            <h3>他发起了这个项目</h3>
                                        </div>
                                        <div className="col-m-4">
                                            <h1>
                                                <img style={{
                                                    width: "80px",
                                                    height: "100px",
                                                    backgroundsize: "100% 100%"
                                                }} class="img-circle" src={require('../../../images/2.jpg')} alt="头像"/>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-m-12">
                                    <h1>已筹￥1,000,000.00</h1>
                                    <h3>目标金额￥50,000.00 200.00%</h3>
                                    <h1>剩余时间: n天</h1>
                                    <h1>支持人数: n人</h1>
                                </div>
                                <div className="col-m-12">
                                    <button type="button" class="btn btn-info">立即支持</button>
                                    <button type="button" class="btn btn-info">关注项目</button>
                                </div>
                                <div className="col-m-12">
                                    <h4>此项目须在2018-01-30 12:00前达到 ¥200,000 的目标才可成功</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-m-12 up-cont">

                    </div>


                </div>
                <ObjConditionComponent/>

            </div>

        )
    }
}



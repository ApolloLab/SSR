import React, {Component} from 'react';
import './liushuo.css';

export default class MyComponent extends React.Component {

    render() {
        return (
            <div className="MyComponent container" >
                <MyInfor/>
                <MyContent/>
            </div>
        )
    }
}

class MyInfor extends React.Component {
    render() {
        return (
            <div className="MyInfor row">
                <ul className="col-md-2 My_list">
                    <li className="MyInfor_title">设置</li>
                    <li>个人资料</li>
                    <li>修改密码</li>
                </ul>
                <div className="col-md-10 MyInfor_div">
                    <ul className="MyInfor_content row">
                        <li className="col-md-4 row">
                            <div className="col-md-8">
                                <div className="MyInfor_content_img">
                                    < img src={require('../../../images/My2.jpg')} alt="" />
                                </div>
                            </div>
                            <p className="col-md-4">SBT_Y</p>
                        </li>
                        <li className="col-md-4">
                            <p>￥0.00</p>
                            <p>账户余额</p>
                        </li>
                        <li className="col-md-4">
                            <p>0</p>
                            <p>我的消息</p>
                        </li>
                    </ul>

                </div>

            </div>
        )
    }
}

class MyContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs:[
                {tabName:"我的发起",id:1},
                {tabName:"我的订单",id:2},
                {tabName:"我的关注",id:3},
            ],
            currentIndex:1,
        };
    }
    tabChoiced=(id)=>{
        //tab切换到方法
        this.setState({
            currentIndex:id
        });
    }
    render(){
        var _this=this;
        var isBox1Show=this.state.currentIndex==1 ? 'block' : 'none';
        var isBox2Show=this.state.currentIndex==2 ? 'block' : 'none';
        var isBox3Show=this.state.currentIndex==3 ? 'block' : 'none';

        var tabList= this.state.tabs.map(function(res,index) {
            // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
            var tabStyle=res.id==this.state.currentIndex ? 'subCtrl active' : 'subCtrl';

            return    <li key={index} onClick={this.tabChoiced.bind(_this,res.id)} className={tabStyle}>{res.tabName}</li>

        }.bind(_this));
        return (
            <div className="MyContent row">
                <ul className="col-md-2 My_list">
                    <li className="MyContent_title">我的</li>
                    {tabList}
                </ul>
                <div className="MyContent_detail col-md-10">
                    <div style={{"display":isBox1Show}} >
                        <p className="MyContent_detail_p">我的发起</p>
                        <hr></hr>
                        <ul className="MyContent_project">
                            <li className="row">
                                <p className="col-md-2">
                                    < img src={require('../../../images/tabikaeru.png')} alt="" />
                                </p>
                                <div className="col-md-7">
                                    <p className="MyContent_project_title">恶魔的金币</p>
                                    <ul className="row MyContent_project_infor">
                                        <li className="col-md-2">
                                            <p>已众筹</p>
                                            <p>￥32111</p>
                                        </li>
                                        <li className="col-md-2">
                                            <p>支持者</p>
                                            <p>145</p>
                                        </li>
                                        <li className="col-md-2">
                                            <p>评论数</p>
                                            <p>207</p>
                                        </li>
                                        <li className="col-md-3">
                                            <p>开始时间</p>
                                            <p>2018-02-19</p>
                                        </li>
                                        <li className="col-md-3">
                                            <p>结束时间</p>
                                            <p>2018-02-21</p>
                                        </li>
                                    </ul>
                                </div>
                                <p className="col-md-3">
                                    <button id="MyContent_project_manage">项目管理</button>
                                </p>
                            </li>
                            <li className="row">
                                <p className="col-md-2">
                                    < img src={require('../../../images/tabikaeru.png')} alt="" />
                                </p>
                                <div className="col-md-7">
                                    <p className="MyContent_project_title">恶魔的金币</p>
                                    <ul className="row MyContent_project_infor">
                                        <li className="col-md-2">
                                            <p>已众筹</p>
                                            <p>￥32111</p>
                                        </li>
                                        <li className="col-md-2">
                                            <p>支持者</p>
                                            <p>145</p>
                                        </li>
                                        <li className="col-md-2">
                                            <p>评论数</p>
                                            <p>207</p>
                                        </li>
                                        <li className="col-md-3">
                                            <p>开始时间</p>
                                            <p>2018-02-19</p>
                                        </li>
                                        <li className="col-md-3">
                                            <p>结束时间</p>
                                            <p>2018-02-21</p>
                                        </li>
                                    </ul>
                                </div>
                                <p className="col-md-3">
                                    <button id="MyContent_project_manage">项目管理</button>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div style={{"display":isBox2Show}}>
                        <p className="MyContent_detail_p">我的订单</p>
                        <hr></hr>
                        <ul className="MyContent_project">
                            <li className="row">
                                <p className="col-md-2">
                                    < img src={require('../../../images/tabikaeru.png')} alt="" />
                                </p>
                                <div className="col-md-7">
                                    <p className="MyContent_project_title">恶魔的金币</p>
                                    <ul className="row MyContent_project_infor">
                                        <li className="col-md-2">
                                            <p>已众筹</p>
                                            <p>￥32111</p>
                                        </li>
                                        <li className="col-md-2">
                                            <p>支持者</p>
                                            <p>145</p>
                                        </li>
                                        <li className="col-md-2">
                                            <p>评论数</p>
                                            <p>207</p>
                                        </li>
                                        <li className="col-md-3">
                                            <p>开始时间</p>
                                            <p>2018-02-19</p>
                                        </li>
                                        <li className="col-md-3">
                                            <p>结束时间</p>
                                            <p>2018-02-21</p>
                                        </li>
                                    </ul>
                                </div>
                                <p className="col-md-3">
                                    <button id="MyContent_project_support">已支持</button>
                                    <button id="MyContent_project_refund">申请退款</button>
                                </p>
                            </li>
                            <li className="row">
                                <p className="col-md-2">
                                    < img src={require('../../../images/tabikaeru.png')} alt="" />
                                </p>
                                <div className="col-md-7">
                                    <p className="MyContent_project_title">恶魔的金币</p>
                                    <ul className="row MyContent_project_infor">
                                        <li className="col-md-2">
                                            <p>已众筹</p>
                                            <p>￥32111</p>
                                        </li>
                                        <li className="col-md-2">
                                            <p>支持者</p>
                                            <p>145</p>
                                        </li>
                                        <li className="col-md-2">
                                            <p>评论数</p>
                                            <p>207</p>
                                        </li>
                                        <li className="col-md-3">
                                            <p>开始时间</p>
                                            <p>2018-02-19</p>
                                        </li>
                                        <li className="col-md-3">
                                            <p>结束时间</p>
                                            <p>2018-02-21</p>
                                        </li>
                                    </ul>
                                </div>
                                <p className="col-md-3">
                                    <button id="MyContent_project_support">已支持</button>
                                    <button id="MyContent_project_refund">申请退款</button>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div style={{"display":isBox3Show}}>
                        <p className="MyContent_detail_p">我的关注</p>
                        <hr></hr>
                        <ul className="MyContent_project">
                            <li className="row">
                                <p className="col-md-2">
                                    < img src={require('../../../images/tabikaeru.png')} alt="" />
                                </p>
                                <div className="col-md-7">
                                    <p className="MyContent_project_title">恶魔的金币</p>
                                    <ul className="row MyContent_project_infor">
                                        <li className="col-md-2">
                                            <p>已众筹</p>
                                            <p>￥32111</p>
                                        </li>
                                        <li className="col-md-2">
                                            <p>支持者</p>
                                            <p>145</p>
                                        </li>
                                        <li className="col-md-2">
                                            <p>评论数</p>
                                            <p>207</p>
                                        </li>
                                        <li className="col-md-3">
                                            <p>开始时间</p>
                                            <p>2018-02-19</p>
                                        </li>
                                        <li className="col-md-3">
                                            <p>结束时间</p>
                                            <p>2018-02-21</p>
                                        </li>
                                    </ul>
                                </div>
                                <p className="col-md-3">
                                    <button id="MyContent_project_supporting">去支持</button>
                                </p>
                            </li>
                            <li className="row">
                                <p className="col-md-2">
                                    < img src={require('../../../images/tabikaeru.png')} alt="" />
                                </p>
                                <div className="col-md-7">
                                    <p className="MyContent_project_title">恶魔的金币</p>
                                    <ul className="row MyContent_project_infor">
                                        <li className="col-md-2">
                                            <p>已众筹</p>
                                            <p>￥32111</p>
                                        </li>
                                        <li className="col-md-2">
                                            <p>支持者</p>
                                            <p>145</p>
                                        </li>
                                        <li className="col-md-2">
                                            <p>评论数</p>
                                            <p>207</p>
                                        </li>
                                        <li className="col-md-3">
                                            <p>开始时间</p>
                                            <p>2018-02-19</p>
                                        </li>
                                        <li className="col-md-3">
                                            <p>结束时间</p>
                                            <p>2018-02-21</p>
                                        </li>
                                    </ul>
                                </div>
                                <p className="col-md-3">
                                    <button id="MyContent_project_supporting">去支持</button>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

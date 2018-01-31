import React, {Component} from 'react';
import './luzhaopan.css'

export default class ObjConditionComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs:[
                {tabName:"项目详情",id:1},
                {tabName:"项目更新",id:2},
                {tabName:"评论数",id:3},
                {tabName:"支持人数",id:4},
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
        var isBox4Show=this.state.currentIndex==4 ? 'block' : 'none';


        var tabList= this.state.tabs.map(function(res,index) {
            // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
            var tabStyle=res.id==this.state.currentIndex ? 'subCtrl active' : 'subCtrl';

            return    <li key={index} onClick={this.tabChoiced.bind(_this,res.id)} className={tabStyle}>{res.tabName}</li>

        }.bind(_this));
        return (
            <div className="listWrap">
                <ul className="subNavWrap">
                    {tabList}
                </ul>
                <div className="newsList">
                    <div style={{"display":isBox1Show}} >
                        <h1>投资亮点：</h1>
                        <h1> 市场概况：</h1>
                        <h1>产品概况：</h1>
                        <h1> 代表作品：《戒魔人》《中国惊奇先生番外篇》《尸兄》《斗魔西游》等</h1>
                        <h1>商业模式：</h1>
                    </div>
                    <div style={{"display":isBox2Show}}>
                        体育世界
                    </div>
                    <div style={{"display":isBox3Show}}>
                        娱乐圈
                    </div>
                    <div style={{"display":isBox4Show}}>
                        娱乐圈1111
                    </div>
                </div>
            </div>
        )
    }
}


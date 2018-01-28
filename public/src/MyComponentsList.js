import React, {Component} from 'react';
import ReactDom from 'react-dom';

class MyComponentsList extends Component{
    render() {
        return (
            <div className="myList col-md-3 ">
                <ul id='myList'>
                    <li>设置
                        <ul>
                            <li>个人资料</li>
                            <li>修改密码</li>
                        </ul>
                    </li>
                    <li>我的
                        <ul className="itemContainer clearfix">
                            <li>我的发起</li>
                            <li>我的关注</li>
                            <li>我的订单</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MyComponentsList
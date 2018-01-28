import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';

class MyComponentsContent extends Component {
    render() {
        return (
            <div className="myContent col-md-9 ">
                      <ul className='myContent_data row'>
                          <li className="col-md-4">
                              <p>
                                  <span>头像</span>
                                  <span>用户名</span>
                              </p>
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
                <div className='myContent_infor'>
                </div>

            </div>
        )
    }
}

export default MyComponentsContent
import React, {Component} from 'react';
import img1 from '../../../images/001.jpg';

export default class LoginComponent extends Component {
    constructor(){
        super();
        this.state={
            index:0
        }
    }

    render() {
        return (
            <div className="row LoginComponent_row_loginBtn" style={{border: "1px solid #000"}}>
                <div className="col-md-9" style={{
                    textAlign: "center",
                    width: "80%",
                    background: "#c9c9c9",
                    margin: "0 auto",
                    fontSize: "40px"
                }}>
                    <span style={{display: "inline-block", margin: "18px", color: "#333"}}>登 录</span>
                    <div className="row LoginComponent_row_box" style={{background: "#d7d7d7"}}>
                        <div className="col-md-5"
                             style={{borderRight: "1px solid #797979", margin: "15px auto", fontSize: "22px"}}>
                            <div className="col-md-10 LoginComponent-left-box-1">-----合作账号登录-----</div>
                            <div className="col-md-10 LoginComponent-left-box">
                                    <img className="col-md-3" src={img1} alt="001" />
                                    <img className="col-md-3" src={img1} alt="002" />
                                    <img className="col-md-3" src={img1} alt="003" />
                            </div>
                            <div className="col-md-10 LoginComponent-left-box">没有账号？<span>快速登陆</span></div>
                        </div>
                        <div className="col-md-7" style={{width: "60%", margin: "15px auto"}}>
                            <form>
                                <div className="form-group col-md-8">
                                    <input type="email" className="form-control LoginComponent_input"
                                           id="LoginComponent_email_input" placeholder="Email"/>
                                </div>
                                <div className="form-group col-md-8">
                                    <input type="password" className="form-control LoginComponent_input"
                                           id="LoginComponent_passward_input" placeholder="Password"/>
                                </div>
                                <div className="col-md-8">
                                    <button type="submit" className="col-md-4 btn" style={{marginRight: "30%"}}>Submit
                                    </button>
                                    <span className="col-md-4"
                                          style={{display: "inline-block", fontSize: "16px"}}>忘记密码</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
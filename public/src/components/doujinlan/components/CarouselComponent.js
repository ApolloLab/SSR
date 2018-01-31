import React, { Component } from 'react';
import "../doujinlan.css"

export default class CarouselComponent extends Component{
    constructor(){
        super();
        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
        this.state = {
            index: 2
        }
    }
    componentDidMount() {
        this.timer = setInterval(this.right, 2500);
        this.carou.onmouseover = () => {
            clearInterval(this.timer);
        }
        this.carou.onmouseout = () => {
            this.timer = setInterval(this.right, 2500);
        }

    }
    left(){
        let index =  this.state.index == 1 ? 6 : --this.state.index;
        if(index == 6){
            this.carousel.className = "carousel-img stop-slide";
            this.carousel.style.left = -(17.7 + 11.1111 * 4) + "%";
            console.log(this.carousel.offsetLeft);
            this.setState({
                index: 5
            })
            this.carousel.className = "carousel-img run-slide";
            this.carousel.style.left = -(17.7 + 11.1111 * (index - 3)) + "%";
        }else{
            this.setState({
                index: index
            })
            this.carousel.className = "carousel-img run-slide";
            this.carousel.style.left = -(17.7 + 11.1111 * (index - 2)) + "%";
        }
    }
    right(){
        let index =  this.state.index == 7 ? 2 : ++this.state.index;
        if(index == 2){
            this.carousel.className = "carousel-img stop-slide";
            this.carousel.style.left = -(17.7 + 11.1111 * 0) + "%";
            console.log(this.carousel.offsetLeft);
            this.setState({
                index: 3
            })
            this.carousel.className = "carousel-img run-slide";
            this.carousel.style.left = -(17.7 + 11.1111 * (index - 1)) + "%";
        }else{
            this.setState({
                index: index
            })
            this.carousel.className = "carousel-img run-slide";
            this.carousel.style.left = -(17.7 + 11.1111 * (index - 2)) + "%";
        }
    }
    render () {
        return(
            <div ref={(carou) => this.carou = carou}  className="carou">
                <div className="carousel">
                    <ul ref={(carousel)=>this.carousel = carousel} className="carousel-img run-slide">
                        <li>
                            <img src={require('../../../../images/carousel4.jpg')} alt=""/>
                        </li>
                        <li className={this.state.index == 1 ? 'active' : ''}>
                            <img src={require('../../../../images/carousel5.jpg')} alt=""/>
                            <a href="#">
                                <div className="discribe">
                                    <p className="discribe-word">一段文字描述一段文字描述一段文字描述一段文字描述一段文字描述</p>
                                    <p className="discribe-look">去看看</p>
                                </div>
                            </a>
                        </li>
                        <li className={this.state.index == 2 ? 'active' : ''} >
                            <img src={require('../../../../images/carousel1.jpg')} alt=""/>
                            <a href="#">
                                <div className="discribe">
                                    <p className="discribe-word">一段文字描述一段文字描述一段文字描述一段文字描述一段文字描述</p>
                                    <p className="discribe-look">去看看</p>
                                </div>
                            </a>
                        </li>
                        <li className={this.state.index == 3 ? 'active' : ''}>
                            <img src={require('../../../../images/carousel2.jpg')} alt=""/>
                            <a href="#">
                                <div className="discribe">
                                    <p className="discribe-word">一段文字描述一段文字描述一段文字描述一段文字描述一段文字描述</p>
                                    <p className="discribe-look">去看看</p>
                                </div>
                            </a>
                        </li>
                        <li className={this.state.index == 4 ? 'active' : ''}>
                            <img src={require('../../../../images/carousel3.jpg')} alt=""/>
                            <a href="#">
                                <div className="discribe">
                                    <p className="discribe-word">一段文字描述一段文字描述一段文字描述一段文字描述一段文字描述</p>
                                    <p className="discribe-look">去看看</p>
                                </div>
                            </a>
                        </li>
                        <li className={this.state.index == 5 ? 'active' : ''}>
                            <img src={require('../../../../images/carousel4.jpg')} alt=""/>
                            <a href="#">
                                <div className="discribe">
                                    <p className="discribe-word">一段文字描述一段文字描述一段文字描述一段文字描述一段文字描述</p>
                                    <p className="discribe-look">去看看</p>
                                </div>
                            </a>
                        </li>
                        <li className={this.state.index == 6 ? 'active' : ''}>
                            <img src={require('../../../../images/carousel5.jpg')} alt=""/>
                            <a href="#">
                                <div className="discribe">
                                    <p className="discribe-word">一段文字描述一段文字描述一段文字描述一段文字描述一段文字描述</p>
                                    <p className="discribe-look">去看看</p>
                                </div>
                            </a>
                        </li>
                        <li className={this.state.index == 7 ? 'active' : ''} >
                            <img src={require('../../../../images/carousel1.jpg')} alt=""/>
                            <a href="#">
                                <div className="discribe">
                                    <p className="discribe-word">一段文字描述一段文字描述一段文字描述一段文字描述一段文字描述</p>
                                    <p className="discribe-look">去看看</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <img src={require('../../../../images/carousel2.jpg')} alt=""/>
                        </li>
                    </ul>
                </div>
                <div className="carousel-btn">
                    <span className="carousel-btn-left">
                        <img onClick={this.left} src={require('../../../../images/left.png')} alt=""/>
                    </span>
                    <span className="carousel-btn-right">
                        <img onClick={this.right} src={require('../../../../images/right.png')} alt=""/>
                    </span>
                </div>
            </div>
        )
    }
}
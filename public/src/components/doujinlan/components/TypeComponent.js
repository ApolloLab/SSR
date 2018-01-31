import React, { Component } from 'react';
import "../doujinlan.css"

export default class TypeComponent extends Component{
    constructor(){
        super();
        this.state = {
            indexRecom: 0,
            cont: [
                {
                    title: "恶龙传说",
                    img: "../../../../images/recom-main.jpg",
                    main: "游戏一段介绍游戏一段介绍游戏一段介绍",
                    detail: [
                        {
                            img: "../../../../images/recom-detail1.jpg",
                            disc: "图片一的描述"
                        },
                        {
                            img: "../../../../images/recom-detail2.jpg",
                            disc: "图片二的描述"
                        },
                        {
                            img: "../../../../images/recom-detail3.jpg",
                            disc: "图片三的描述"
                        },
                        {
                            img: "../../../../images/recom-detail4.jpg",
                            disc: "图片四的描述"
                        }
                    ]
                },
                {
                    title: "时间简史",
                    img: "../../../../images/recom-main.jpg",
                    main: "电影一段介绍电影一段介绍游戏一段介绍",
                    detail: [
                        {
                            img: "../../../../images/recom-detail1.jpg",
                            disc: "图片一的描述"
                        },
                        {
                            img: "../../../../images/recom-detail2.jpg",
                            disc: "图片二的描述"
                        },
                        {
                            img: "../../../../images/recom-detail3.jpg",
                            disc: "图片三的描述"
                        },
                        {
                            img: "../../../../images/recom-detail4.jpg",
                            disc: "图片四的描述"
                        }
                    ]
                },
                {
                    title: "成都",
                    img: "../../../../images/recom-main.jpg",
                    main: "音乐一段介绍游戏一段介绍游戏一段介绍",
                    detail: [
                        {
                            img: "../../../../images/recom-detail1.jpg",
                            disc: "图片一的描述"
                        },
                        {
                            img: "../../../../images/recom-detail2.jpg",
                            disc: "图片二的描述"
                        },
                        {
                            img: "../../../../images/recom-detail3.jpg",
                            disc: "图片三的描述"
                        },
                        {
                            img: "../../../../images/recom-detail4.jpg",
                            disc: "图片四的描述"
                        }
                    ]
                },
                {
                    title: "穷查理宝典",
                    img: "../../../../images/recom-main.jpg",
                    main: "书籍一段介绍游戏一段介绍游戏一段介绍",
                    detail: [
                        {
                            img: "../../../../images/recom-detail1.jpg",
                            disc: "图片一的描述"
                        },
                        {
                            img: "../../../../images/recom-detail2.jpg",
                            disc: "图片二的描述"
                        },
                        {
                            img: "../../../../images/recom-detail3.jpg",
                            disc: "图片三的描述"
                        },
                        {
                            img: "../../../../images/recom-detail4.jpg",
                            disc: "图片四的描述"
                        }
                    ]
                },
                {
                    title: "出版出版",
                    img: "../../../../images/recom-main.jpg",
                    main: "出版出版一段介绍游戏一段介绍游戏一段介绍",
                    detail: [
                        {
                            img: "../../../../images/recom-detail1.jpg",
                            disc: "图片一的描述"
                        },
                        {
                            img: "../../../../images/recom-detail2.jpg",
                            disc: "图片二的描述"
                        },
                        {
                            img: "../../../../images/recom-detail3.jpg",
                            disc: "图片三的描述"
                        },
                        {
                            img: "../../../../images/recom-detail4.jpg",
                            disc: "图片四的描述"
                        }
                    ]
                }
            ]
        }
    }
    setTypeIndex(index){
        console.log(this.state.indexRecom);
        this.setState({
            indexRecom: index
        })
    }
    render () {
        return(
            <div className="type">
                <div className="type-cont">
                    <div className="navb">
                        <ul className="type-cont-title">
                            <li onClick={this.setTypeIndex.bind(this, 0)} className={this.state.indexRecom == 0 ? "active" : ""}>游戏</li>
                            <li onClick={this.setTypeIndex.bind(this, 1)} className={this.state.indexRecom == 1 ? "active" : ""}>电影</li>
                            <li onClick={this.setTypeIndex.bind(this, 2)} className={this.state.indexRecom == 2 ? "active" : ""}>音乐</li>
                            <li onClick={this.setTypeIndex.bind(this, 3)} className={this.state.indexRecom == 3 ? "active" : ""}>书籍</li>
                            <li onClick={this.setTypeIndex.bind(this, 4)} className={this.state.indexRecom == 4 ? "active" : ""}>出版</li>
                        </ul>
                    </div>
                    <div className="type-cont-recom">
                        <div className="recom-main">
                            <h3>{this.state.cont[this.state.indexRecom].title}</h3>
                            <div className="recom-main-disc">
                                <img src={require("../../../../images/recom-main.jpg")} alt=""/>
                                <p>{this.state.cont[this.state.indexRecom].main}</p>
                            </div>
                        </div>
                        <div className="recom-detail">
                            <h4>分类推荐</h4>
                            <ul className="recom-detail-cont">
                                <li>
                                    <div className="recom-detail-img">
                                        <img src={require("../../../../images/recom-detail1.jpg")} alt=""/>
                                        <p>{this.state.cont[this.state.indexRecom].detail[0].disc}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="recom-detail-img">
                                        <img src={require("../../../../images/recom-detail2.jpg")} alt=""/>
                                        <p>{this.state.cont[this.state.indexRecom].detail[1].disc}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="recom-detail-img">
                                        <img src={require("../../../../images/recom-detail3.jpg")} alt=""/>
                                        <p>{this.state.cont[this.state.indexRecom].detail[2].disc}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="recom-detail-img">
                                        <img src={require("../../../../images/recom-detail4.jpg")} alt=""/>
                                        <p>{this.state.cont[this.state.indexRecom].detail[3].disc}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
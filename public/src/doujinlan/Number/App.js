import React, { Component } from 'react';
import Add from './Add';

export default class App extends Component{
    constructor(){
        super();
        this.state={}
    }
    getNumber(number){
        this.setState({
            number: number
        })
    }

    print(){
        console.log(this.state.number)
    }

    render(){
        return(
            <div>
                <Add number={this.getNumber.bind(this)}/>
                <button onClick={this.print.bind(this)}>dayin</button>
            </div>
        )
    }
}
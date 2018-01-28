import React, {Component} from 'react';

export default class Add extends Component{
    constructor() {
        super();
        this.setNumber = this.setNumber.bind(this);
        this.state = {
            number: 10
        }
    }
    setNumber(){
        this.props.number(this.state.number);
    }
    render(){
        return(
            <div>
                <button onClick={this.setNumber}>dianjis</button>
            </div>
        )
    }
}
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function App1(props) {
    return <p>app1:{parseInt(props.number1) + 1}</p>
}

function App2(props) {
    return (
        <div>
        <p>app2:{parseInt(props.number2) - 1}</p>
        </div>
)
}


class Index extends React.Component {
    constructor() {
        super();
        this.state = {number: ""}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({number: e.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.number} onChange={this.handleChange}/>
                <App1 number1={this.state.number}/>
                <App2 number2={this.state.number}/>
            </div>
        )
    }
}


ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);
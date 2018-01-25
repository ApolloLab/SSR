import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Test from './components/Test.jsx'


class App extends Component {
    render() {
        return (
            <div className="aaa">
                <button className="btn btn-default" type="submit">button---</button>
                <Test/>
            </div>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)
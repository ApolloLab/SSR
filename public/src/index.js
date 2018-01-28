import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';
import Test from './components/Test.jsx'
import MyComponents from './MyComponents'



class App extends Component {
    render() {
        return (
            <div className="aaa">
               <MyComponents/>
            </div>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)
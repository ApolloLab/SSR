import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';
import MyComponentsList from './MyComponentsList'
import MyComponentsContent from './MyComponentsContent'

class MyComponents extends Component {
    render() {
        return (
            <div className="container row-fluid row" id='my'>
                <MyComponentsList/>
                <MyComponentsContent/>
            </div>
        )
    }
}

export default MyComponents
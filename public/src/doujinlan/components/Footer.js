import React, { Component, PropTypes} from 'react';

export default class Footer extends Component{

    renderFilter(filter, name){

    }

    render(){
        return(
            <div>
                Show:
                {' '}
                {this.renderFilter('SHOW_ALL', 'ALL')}
            </div>
        )
    }

}
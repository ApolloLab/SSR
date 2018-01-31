import React, { Component } from 'react';
import CarouselComponent from './CarouselComponent.js';
import TypeComponent from './TypeComponent.js'
import IntroComponent from './IntroComponent.js'
import FooterComponent from './FooterComponent.js'

export default class HomeComponent extends Component{
    render () {
        return(
            <div>
                <CarouselComponent/>
                <TypeComponent />
                <IntroComponent />
                <FooterComponent />
            </div>
        )
    }
}
import React, { Component } from 'react';

import './home.scss';

import Navlist from '../navlist/navlist';
import Intro from './intro';

export default class Home extends Component {

    constructor(props) {
        super();

        this.state = {

        }
    }
    
    render() {
        return(
            <div className='home'>
                <Navlist />
                <div className='home-content'>
                    <Intro />
                </div>
            </div>
        );
    }
}
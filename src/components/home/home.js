import React, { Component } from 'react';
import Navlist from '../navlist/navlist';

import './home.scss';

export default class Home extends Component {
    
    render() {
        return(
            <div className='home container'>
                <Navlist />
                <div className='home-content'>
                    <h1>Zachary Johnson</h1>
                    <h3>
                        Hello there, my name is Zachary Johnson.
                    </h3>
                </div>
            </div>
        );
    }
}
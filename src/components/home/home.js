import React, { Component } from 'react';
import Navbar from '../navbar/navbar';

import './home.scss';


export default class Home extends Component {
    
    render() {
        return(
            <div className='home container'>
                <Navbar />
                <h1>Zachary Johnson</h1>
                <h3>
                    Hello there, my name is Zachary Johnson. I'm a Boston-based Software Engineer.
                </h3>

            </div>
        );
    }
}
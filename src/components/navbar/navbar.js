import React, { Component } from 'react';

import './navbar.scss';

import { SocialIcon } from 'react-social-icons';

export default class Navbar extends Component {

    render() {
        return(
            <div className='navbar'>
                <div className='navbar-items'>
                    <h5>Zachary Johnson</h5>
                    <div className='social-icons'>
                        <SocialIcon url='https://www.linkedin.com/in/johnsonzm' target='_blank' className='social-icon' style={{ height: 35, width: 35 }} />
                        <SocialIcon url='https://www.github.com/zachmma99' target='_blank' className='social-icon' style={{ height: 35, width: 35 }} />
                    </div>
                </div>
            </div>
        );
    }
}
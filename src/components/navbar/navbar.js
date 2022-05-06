import React, { Component } from 'react';

import './navbar.scss';

import { SocialIcon } from 'react-social-icons';

export default class Navbar extends Component {

    render() {
        return(
            <div className='navbar'>
                <ul className='nav-list'>
                    <li>Zachary Johnson</li>
                    <li><SocialIcon url='https://www.linkedin.com/johnsonzm' target='_blank' /></li>
                    <li><SocialIcon url='https://www.github.com/zachmma99' target='_blank' /></li>
                </ul>
            </div>
        );
    }
}
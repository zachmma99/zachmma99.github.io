import React, { Component } from 'react';

import './header.scss';

import { SocialIcon } from 'react-social-icons';
import ProfilePicture from '../../assets/profile-picture.jpg';

export default class Header extends Component {

    render() {
        return(
            <div className='header'>
                <div className='header-items'>
                    <div className='name'>
                        <img src={ProfilePicture} alt='profile' className='profile-picture'/>
                        <h5>Zachary Johnson</h5>
                    </div>
                    <div className='social-icons'>
                        <SocialIcon url='https://www.linkedin.com/in/johnsonzm' target='_blank' className='social-icon' style={{ height: 35, width: 35 }} />
                        <SocialIcon url='https://www.github.com/zachmma99' target='_blank' className='social-icon' style={{ height: 35, width: 35 }} />
                        <SocialIcon url='https://www.twitter.com/zachmma99' target='_blank' className='social-icon' style={{ height: 35, width: 35 }} />
                        <SocialIcon url='https://discord.com' target='_blank' className='social-icon' style={{ height: 35, width: 35 }} />
                    </div>
                </div>
            </div>
        );
    }
}
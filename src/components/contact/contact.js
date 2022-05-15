import React from "react";

import './contact.scss';

import { SocialIcon } from 'react-social-icons';

export default function Contact () {

    return (
        <div className="contact">
            <h3>Contact</h3>
            <p>
                If you would like to contact me about to discuss one of my projects or
                talk about video games or anything at all you can use and of my social
                profiles to reach out or send me an email using the button below!
                <br /><br />
                I look forward to hearing from you!
            </p>
            <br />
            <a href="mailto:johnsonz3@wit.edu subject:Saw your site!" className="contact-btn">Contact Me!</a>
            <br />
            <div className='social-icons'>
                <SocialIcon url='https://www.linkedin.com/in/johnsonzm' target='_blank' className='social-icon' style={{ height: 35, width: 35 }} />
                <SocialIcon url='https://www.github.com/zachmma99' target='_blank' className='social-icon' style={{ height: 35, width: 35 }} />
                <SocialIcon url='https://www.twitter.com/zachmma99' target='_blank' className='social-icon' style={{ height: 35, width: 35 }} />
                <SocialIcon url='https://discord.com' target='_blank' className='social-icon' style={{ height: 35, width: 35 }} />
            </div>
        </div>
    );
}
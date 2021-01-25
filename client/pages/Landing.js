import React from 'react';
import { NavLink } from 'react-router-dom';

import landingImg from '../img/undraw.illustration.svg';

class Landing extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='portfolio__landing'>
                <div className='portfolio__landing-text'>
                    <h1>Let&apos;s Craft Something Elegant</h1>

                    <div className='portfolio__body-text'>
                        <p>Tom Allain</p>
                        <p>Web Developer and Electrician</p>
                        <p>Halifax, Nova Scotia</p>
                    </div>

                    <NavLink className='portfolio__button'
                        to='/contact'>
                        Get in Touch
                    </NavLink>

                    <NavLink className='portfolio__button portfolio__button--reverse'
                        to='/showcase'>
                        See My Work
                    </NavLink>
                </div>

                <div className='portfolio__landing-img'>
                    <img src={landingImg} />
                </div>
            </div>
        );
    }
}

export default Landing;

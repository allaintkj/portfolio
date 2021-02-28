import React from 'react';
import { NavLink } from 'react-router-dom';

import landingImg from '../img/undraw.illustration.svg';

class Landing extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='portfolio__landing-wrapper'>
                <div className='portfolio__landing-left'>
                    <h1>{'Let\'s Craft Something Elegant'}</h1>

                    <div className='portfolio__landing-intro'>
                        <p>Tom Allain</p>
                        <p>Web Developer and Electrician</p>
                        <p>Halifax, Nova Scotia</p>
                    </div>

                    <div className='portfolio__landing-ctas'>
                        <NavLink className='portfolio__button'
                            to='/contact'>
                            Get in Touch
                        </NavLink>

                        <NavLink className='portfolio__button portfolio__button--reverse'
                            to='/showcase'>
                            See My Work
                        </NavLink>
                    </div>
                </div>

                <div className='portfolio__landing-right'>
                    <img alt='Landing Page Illustration' src={landingImg} />
                </div>
            </div>
        );
    }
}

export default Landing;

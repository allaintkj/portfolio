import React from 'react';
import { NavLink } from 'react-router-dom';

class Landing extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='portfolio__landing'>
                <h1>Welcome</h1>

                <div className='portfolio__body-text'>
                    <p>Tom Allain</p>
                    <p>Web Developer and Electrician</p>
                    <p>Halifax, Nova Scotia</p>
                </div>

                <NavLink className='portfolio__button'
                    onClick={() => {
                        if (this.props.toggleMenu) { this.props.toggleMenu(); }
                    }}
                    to='showcase'>
                    See My Work
                </NavLink>
            </div>
        );
    }
}

export default Landing;

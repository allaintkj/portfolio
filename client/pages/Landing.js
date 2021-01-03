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

                <div className='portfolio__landing-text'>
                    <p>My name is Tom Allain.</p>
                    <p>I am a web developer and an electrician.</p>
                    <p>Currently based in Halifax, Nova Scotia.</p>
                </div>

                <NavLink className='portfolio__button'
                    onClick={() => {
                        if (this.props.toggleMenu) { this.props.toggleMenu(); }
                    }}
                    to='showcase'>
                    Showcase
                </NavLink>
            </div>
        );
    }
}

export default Landing;

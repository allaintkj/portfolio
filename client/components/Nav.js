import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <NavLink activeClassName='nav-link--active'
                    className='nav-link'
                    onClick={() => {
                        if (this.props.toggleMenu) { this.props.toggleMenu(); }
                    }}
                    to='/showcase'>
                    Showcase
                </NavLink>

                <NavLink activeClassName='nav-link--active'
                    className='nav-link'
                    onClick={() => {
                        if (this.props.toggleMenu) { this.props.toggleMenu(); }
                    }}
                    to='/contact'>
                    Contact
                </NavLink>
            </React.Fragment>
        );
    }
}

export default Nav;

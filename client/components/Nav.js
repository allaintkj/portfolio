import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ul className='portfolio__nav-links'>
                <li>
                    <NavLink activeClassName='link--active'
                        className='link'
                        onClick={() => {
                            if (this.props.toggleMenu) { this.props.toggleMenu(); }
                        }}
                        to='/home'>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink activeClassName='link--active'
                        className='link'
                        onClick={() => {
                            if (this.props.toggleMenu) { this.props.toggleMenu(); }
                        }}
                        to='/skills'>
                        Skills
                    </NavLink>
                </li>

                <li>
                    <NavLink activeClassName='link--active'
                        className='link'
                        onClick={() => {
                            if (this.props.toggleMenu) { this.props.toggleMenu(); }
                        }}
                        to='/showcase'>
                        Showcase
                    </NavLink>
                </li>

                <li>
                    <NavLink activeClassName='link--active'
                        className='link'
                        onClick={() => {
                            if (this.props.toggleMenu) { this.props.toggleMenu(); }
                        }}
                        to='/contact'>
                        Contact
                    </NavLink>
                </li>
            </ul>
        );
    }
}

Nav.propTypes = {
    toggleMenu: PropTypes.func
};

export default Nav;



import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

// components
import Nav from './Nav';

// images
import Logo from '../img/logo.tom.allain.svg';
import btnBurger from '../img/bars-solid.svg';
import btnClose from '../img/times-solid.svg';

class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header className='portfolio__header'>
                <div className='portfolio__header__logo'>
                    <NavLink to='/'>
                        <img src={Logo} />
                    </NavLink>
                </div>

                <div className='portfolio__header__nav'>
                    <img className='portfolio__header__burger'
                        onClick={() => this.props.toggleMenu()}
                        src={this.props.displayMenu ? btnClose : btnBurger} />

                    <div className='portfolio__header__links'>
                        <Nav />
                    </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    displayMenu: PropTypes.bool,
    toggleMenu: PropTypes.func
};

export default Header;

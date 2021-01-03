import React from 'react';
import { NavLink } from 'react-router-dom';

// components

// logo
import Logo from '../img/logo.tom.allain.svg';
import NavButton from '../img/bars-solid.svg';

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
                        src={NavButton} />
                </div>
            </header>
        );
    }
}

export default Header;

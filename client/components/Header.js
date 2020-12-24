import React from 'react';
import { NavLink } from 'react-router-dom';

// components
import Nav from './Nav';

// logo
import Logo from '../img/logo.svg';

class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='portfolio__header'>
                <div className='portfolio__header__title'>
                    <NavLink to='/'>
                        <img src={Logo} />
                    </NavLink>
                </div>

                <div className='portfolio__header__nav'>
                    <Nav toggleMenu={false} />
                </div>
            </div>
        );
    }
}

export default Header;

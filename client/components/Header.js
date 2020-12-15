import React from 'react';
import { NavLink } from 'react-router-dom';

// components
import Nav from './Nav';

class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='portfolio__header'>
                <div className='portfolio__header__title'>
                    <NavLink to='/'><h1>Tom Allain</h1></NavLink>
                </div>

                <div className='portfolio__header__nav'>
                    <Nav toggleMenu={false} />
                </div>
            </div>
        );
    }
}

export default Header;

import PropTypes from 'prop-types';
import React from 'react';

// components
import Nav from './Nav';

import btnClose from '../img/times-solid.svg';

class MobileMenu extends React.Component {
    constructor() {
        super();
    }

    render() {
        if (!this.props.display) { return null; }

        return (
            <div className='portfolio__mobile-menu'>
                <img className='portfolio__mobile-close'
                    onClick={() => this.props.toggleMenu()}
                    src={btnClose} />

                <Nav toggleMenu={() => this.props.toggleMenu()} />
            </div>
        );
    }
}

MobileMenu.propTypes = {
    display: PropTypes.bool,
    toggleMenu: PropTypes.func
};

export default MobileMenu;

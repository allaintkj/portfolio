import PropTypes from 'prop-types';
import React from 'react';

// components
import Nav from './Nav';
import Footer from './Footer';

class MobileMenu extends React.Component {
    constructor() {
        super();
    }

    render() {
        if (!this.props.display) { return null; }

        return (
            <div className='portfolio__mobile-menu'>
                <Nav toggleMenu={() => this.props.toggleMenu()} />

                <Footer />
            </div>
        );
    }
}

MobileMenu.propTypes = {
    display: PropTypes.bool,
    toggleMenu: PropTypes.func
};

export default MobileMenu;

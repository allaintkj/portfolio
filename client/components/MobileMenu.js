import React from 'react';

import Nav from './Nav';
import Footer from './Footer';

import Close from '../img/times-solid.svg';

class MobileMenu extends React.Component {
    constructor() {
        super();
    }

    render() {
        if (!this.props.display) { return null; }

        return (
            <div className='portfolio__mobile-menu'>
                <div className='portfolio__mobile-close'>
                    <img onClick={() => this.props.toggleMenu()} src={Close} />
                </div>

                <Nav toggleMenu={() => this.props.toggleMenu()} />

                <Footer />
            </div>
        );
    }
}

export default MobileMenu;

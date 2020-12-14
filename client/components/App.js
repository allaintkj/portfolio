import React from 'react';

class App extends React.Component {
    constructor() {
        super();

        this.displayMenu = this.displayMenu.bind(this);

        this.state = {
            displayMenu: 0
        };
    }

    displayMenu() {
        return (
            <div className='portfolio__menu-overlay'>
                <div className='portfolio__menu-close'
                    onClick={() => this.setState({displayMenu: 0})}>
                    &times;
                </div>

                <div className='portfolio__menu__nav-wrapper'>
                    <a className='nav-link' href='/'>Showcase</a>
                    <a className='nav-link' href='/'>Contact</a>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='portfolio'>
                <div className='portfolio__header'>
                    <div className='portfolio__header__title'>
                        <h1 className='txt-white'>Tom Allain</h1>
                    </div>

                    <div className='portfolio__header__nav'>
                        <a className='nav-link' href='/'>Showcase</a>
                        <a className='nav-link' href='/'>Contact</a>
                    </div>
                </div>

                <div className='portfolio__menu-button'
                    onClick={() => this.setState({displayMenu: 1})}>
                    &#9776;
                </div>

                {this.state.displayMenu ? this.displayMenu() : null}

                <div className='portfolio__body--outer'>
                    <div className='portfolio__body--inner'>
                        <div className='portfolio__body__title'>
                            <h2>Under Construction</h2>
                        </div>

                        <div className='portfolio__body__text'>
                            <p>Check back soon!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

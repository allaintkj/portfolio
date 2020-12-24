import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

// pages
import Landing from '../pages/Landing';
import Showcase from '../pages/Showcase';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';

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
                    <Nav toggleMenu={() => this.setState({displayMenu: 0})} />
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='portfolio'>
                <Header />

                <div className='portfolio__menu-button'
                    onClick={() => this.setState({displayMenu: 1})}>
                    &#9776;
                </div>

                {this.state.displayMenu ? this.displayMenu() : null}

                <div className='portfolio__body--outer'>
                    <Switch>
                        <Route component={Landing} exact path='/' />
                        <Route component={Showcase} path='/showcase' />
                        <Route component={Contact} path='/contact' />
                        <Route component={ErrorPage} />
                    </Switch>
                </div>

                <Footer />
            </div>
        );
    }
}

export default App;

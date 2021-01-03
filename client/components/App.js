import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from './Header';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

import Landing from '../pages/Landing';
import Showcase from '../pages/Showcase';
import Contact from '../pages/Contact';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            displayMenu: 0
        };
    }

    render() {
        return (
            <div className='portfolio'>
                <Header toggleMenu={() => this.setState({displayMenu: !this.state.displayMenu})} />
                <MobileMenu display={this.state.displayMenu}
                    toggleMenu={() => this.setState({displayMenu: !this.state.displayMenu})} />

                <div className='portfolio__body'>
                    <Switch>
                        <Route exact path='/'><Redirect from='/' to='/home' /></Route>

                        <Route component={Landing} path='/home' />
                        <Route component={Showcase} path='/showcase' />
                        <Route component={Contact} path='/contact' />
                    </Switch>
                </div>

                <Footer />
            </div>
        );
    }
}

export default App;

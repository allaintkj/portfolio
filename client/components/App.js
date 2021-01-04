import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// components
import Header from './Header';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

// pages
import Landing from '../pages/Landing';
import Showcase from '../pages/Showcase';
import Project from '../pages/Project';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';

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
                <Header displayMenu={this.state.displayMenu}
                    toggleMenu={() => this.setState({displayMenu: !this.state.displayMenu})} />
                    
                <MobileMenu display={this.state.displayMenu}
                    toggleMenu={() => this.setState({displayMenu: !this.state.displayMenu})} />

                <div className='portfolio__body'>
                    <Switch>
                        <Route exact path='/'><Redirect from='/' to='/home' /></Route>

                        <Route component={Landing} path='/home' />
                        <Route component={Project} path='/showcase/:id' />
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

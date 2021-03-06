import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// components
import Header from './Header';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

// pages
import Landing from '../pages/Landing';
import Skills from '../pages/Skills';
import Showcase from '../pages/Showcase';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false
        };
    }

    render() {
        // close the menu if the window is resized
        // i.e. user switches from portait to landscape
        window.addEventListener('resize', () => {
            if (this.state.displayMenu) {
                this.setState({displayMenu: false});
            }
        });

        return (
            <div className='portfolio'>
                <Header displayMenu={this.state.displayMenu}
                    toggleMenu={() => this.setState({displayMenu: !this.state.displayMenu})} />
                    
                <MobileMenu display={this.state.displayMenu}
                    toggleMenu={() => this.setState({displayMenu: !this.state.displayMenu})} />

                <div className='portfolio__body-wrapper'>
                    <Switch>
                        <Route exact path='/'><Redirect from='/' to='/home' /></Route>

                        <Route component={Landing} path='/home' />
                        <Route component={Skills} path='/experience' />
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

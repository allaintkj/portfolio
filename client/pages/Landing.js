import React from 'react';

class Landing extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='portfolio__body--inner'>
                <div className='portfolio__body__title'>
                    <h2 className='portfolio__body__title-text'>Welcome</h2>
                </div>

                <div className='portfolio__body__text'>
                    <p>Tom Allain</p>
                    <p>Halifax, Nova Scotia</p>
                    <p>Web Developer and Electrician</p>
                    <p>Feel free to check out the <a href='/showcase'>showcase</a> and have a look at some of my work, or see how you can <a href='/contact'>contact</a> me.</p>
                </div>
            </div>
        );
    }
}

export default Landing;

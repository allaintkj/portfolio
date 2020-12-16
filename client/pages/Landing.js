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
                    <p>Under construction.</p>
                    <p>Feel free to check out the <a href='/showcase'>showcase.</a></p>
                </div>
            </div>
        );
    }
}

export default Landing;

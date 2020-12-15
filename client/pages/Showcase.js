import React from 'react';

class Showcase extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='portfolio__body--inner'>
                <div className='portfolio__body__title'>
                    <h2 className='portfolio__body__title-text'>Showcase</h2>
                </div>

                <div className='portfolio__body__text'>
                    <p>Under construction.</p>
                    <p>Check back soon!</p>
                </div>

                <div className='portfolio__project-wrapper' />
            </div>
        );
    }
}

export default Showcase;

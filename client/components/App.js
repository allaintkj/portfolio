import React from 'react';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='portfolio'>
                <div className='portfolio__header'>
                    <h1 className='txt-white'>Tom&nbsp;</h1>
                    <h1 className='txt-white'>Allain</h1>
                </div>

                <div className='portfolio__menu-button'>
                    &#9776;
                </div>

                <div className='portfolio__menu-overlay' />
                <div className='portfolio__menu-close' />

                <div className='portfolio__body'>
                    <div className='portfolio__body--title'>
                        <h2>Under Construction</h2>
                    </div>

                    <div className='portfolio__body--text'>
                        <p>Check back soon!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

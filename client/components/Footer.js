import React from 'react';

class Footer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='portfolio__footer'>
                Powered by <a href='https://reactjs.org/' rel='noreferrer noopener' target='_blank'>React</a> and <a href='https://www.sanity.io/' rel='noreferrer noopener' target='_blank'>Sanity.io</a>
            </div>
        );
    }
}

export default Footer;

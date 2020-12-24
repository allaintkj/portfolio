import React from 'react';

class Contact extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='portfolio__body--inner'>
                <div className='portfolio__body__title'>
                    <h2 className='portfolio__body__title-text'>Contact</h2>
                </div>

                <div className='portfolio__body__text'>
                    <p>You can find methods of contacting me on my <a href='https://github.com/allaintkj' rel='noopener noreferrer' target='_blank'>GitHub</a> page or on <a href='https://www.linkedin.com/in/allaintkj' rel='noopener noreferrer' target='_blank'>LinkedIn.</a></p>
                </div>

                <div className='portfolio__contact-wrapper' />
            </div>
        );
    }
}

export default Contact;

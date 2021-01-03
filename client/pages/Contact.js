import React from 'react';

class Contact extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='portfolio__contact'>
                <h1>Get in Touch</h1>
                <p>I am always looking for my next opportunity.</p>
                <p>Questions? Want to hire me? Get in touch.</p>

                <div className='portfolio__contact-links'>
                    <a className='portfolio__button'
                        href='https://github.com/allaintkj'
                        rel='noopener noreferrer'
                        target='_blank'>
                        GitHub
                    </a>
                    <a className='portfolio__button'
                        href='https://www.linkedin.com/in/allaintkj'
                        rel='noopener noreferrer'
                        target='_blank'>
                        LinkedIn
                    </a>
                    <a className='portfolio__button'
                        href='mailto:tom.allain@protonmail.com'
                        rel='noopener noreferrer'
                        target='_blank'>
                        Email Me
                    </a>
                </div>
            </div>
        );
    }
}

export default Contact;

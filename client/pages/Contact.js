import React from 'react';

class Contact extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='portfolio__contact'>
                <div className='portfolio__row'>
                    <h1>Get in Touch</h1>

                    <div className='portfolio__body-text'>
                        <p>I am always looking for my next opportunity.</p>
                        <p>Questions? Want to hire me? Get in touch.</p>
                    </div>
                </div>

                <div className='portfolio__row'>
                    <ul className='portfolio__contact-links'>
                        <li>
                            <a className='portfolio__button'
                                href='https://github.com/allaintkj'
                                rel='noopener noreferrer'
                                target='_blank'>
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a className='portfolio__button'
                                href='https://www.linkedin.com/in/allaintkj'
                                rel='noopener noreferrer'
                                target='_blank'>
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a className='portfolio__button'
                                href='mailto:tom.allain@protonmail.com'
                                rel='noopener noreferrer'
                                target='_blank'>
                                Email Me
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Contact;

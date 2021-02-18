import React from 'react';

// images
import GitHub from '../img/icon-github.svg';
import LinkedIn from '../img/icon-linkedin.svg';
import Email from '../img/icon-email.svg';

class Footer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='portfolio__footer'>
                <div className='portfolio__footer__bg' />

                <div className='portfolio__social'>
                    <a className='portfolio__social-link'
                        href='https://github.com/allaintkj'
                        rel='noopener noreferrer'
                        target='_blank'>
                        <img alt='GitHub Footer Image' className='portfolio__social-icon' src={GitHub} />
                    </a>
        
                    <a className='portfolio__social-link'
                        href='https://www.linkedin.com/in/allaintkj'
                        rel='noopener noreferrer'
                        target='_blank'>
                        <img alt='LinkedIn Footer Image' className='portfolio__social-icon' src={LinkedIn} />
                    </a>

                    <a className='portfolio__social-link'
                        href='mailto:tom.allain@protonmail.com'
                        rel='noopener noreferrer'
                        target='_blank'>
                        <img alt='Email Footer Image' className='portfolio__social-icon' src={Email} />
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;

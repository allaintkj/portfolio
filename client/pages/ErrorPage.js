import React from 'react';

import landingImg from '../img/undraw.illustration.svg';

class ErrorPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='portfolio__landing'>
                <div className='portfolio__landing-text'>
                    <h1>404</h1>

                    <div className='portfolio__body-text'>
                        <p>
                            You are requesting a resource that does not exist. Have you seen the showcase yet? Or perhaps you&apos;d like to get in touch with me:
                        </p>
                    </div>

                    <a className='portfolio__button'
                        href='/contact'>
                        Get in Touch
                    </a>

                    <a className='portfolio__button--reverse'
                        href='/showcase'>
                        See My Work
                    </a>
                </div>

                <div className='portfolio__landing-img'>
                    <img src={landingImg} />
                </div>
            </div>
        );
    }
}

export default ErrorPage;

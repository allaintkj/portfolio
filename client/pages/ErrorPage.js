import React from 'react';

class ErrorPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='portfolio__error-page'>
                <h1>404 Not Found</h1>

                <div className='portfolio__body-text'>
                    <p>
                        You are requesting a resource that does not exist. Have you seen my <a className='link--body' href='/showcase'>showcase</a> yet?
                    </p>
                </div>
            </div>
        );
    }
}

export default ErrorPage;

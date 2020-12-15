import React from 'react';

class ErrorPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='portfolio__body--inner'>
                <div className='portfolio__body__title'>
                    <h2 className='portfolio__body__title-text'>404 Not Found</h2>
                </div>

                <div className='portfolio__body__text'>
                    <p>
                        You are requesting a resource that does not exist. Have you seen my <a href='/showcase'>showcase</a> yet?
                    </p>
                </div>
            </div>
        );
    }
}

export default ErrorPage;

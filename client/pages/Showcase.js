import React from 'react';

// sanity helper
// import sanityClient from '../../sanityClient';

class Showcase extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        // sanityClient.fetch(`*[_type == 'project']{
        //     title,
        //     slug,
        //     mainImage,
        //     excerpt,
        //     description,
        //     projectType,
        //     repository,
        //     demo,
        //     techs
        // }`).then(projects => {
        //     this.setState({
        //         loading: false,
        //         projects: projects
        //     });
        // }).catch(() => {
        //     this.setState({
        //         loading: false,
        //         projects: 0
        //     });
        // });
    }

    render() {
        return (
            <div className='portfolio__contact'>
                <h1>Showcase</h1>
                <p>Have a look at some of my work.</p>
            </div>
        );
    }
}

export default Showcase;

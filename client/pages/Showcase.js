import React from 'react';
import { NavLink } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';

import projects from '../projects.json';

// sanity helper
import sanityClient from '../../sanityClient';

class Showcase extends React.Component {
    constructor() {
        super();

        this.buildProjectList = this.buildProjectList.bind(this);

        this.state = {
            loading: false,
            projects: projects
        };
    }

    buildProjectList() {
        if (this.state.projects == 0) {
            return (
                <li className='portfolio__showcase-item'>
                    No projects to display.
                </li>
            );
        }

        let builder = imageUrlBuilder(sanityClient);

        return this.state.projects.map(project => {
            return (
                <li className='portfolio__showcase-item'
                    key={`portfolio-project-${project._id}`}>
                    <NavLink className='portfolio__button portfolio__showcase-link'
                        to={`/showcase/${project._id}`}>
                        {project.title}
                    </NavLink>

                    <img className='portfolio__showcase-image' src={builder.image(project.mainImage)} />
                </li>
            );
        });
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        // sanityClient.fetch(`*[_type == 'project']{
        //     _id,
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
        //     console.log(projects);

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
            <div className='portfolio__showcase'>
                <h1>Showcase</h1>

                <div className='portfolio__body-text'>
                    <p>Have a look at some of my work.</p>
                </div>

                <ul className='portfolio__showcase-wrapper'>
                    {this.state.loading ? <li className='portfolio__showcase-item'>Fetching...</li> : null}
                    {this.state.loading ? null : this.buildProjectList()}
                </ul>
            </div>
        );
    }
}

export default Showcase;

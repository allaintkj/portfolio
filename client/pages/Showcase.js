import React from 'react';
import { NavLink } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';

// sanity helper
import sanityClient from '../../sanityClient';

class Showcase extends React.Component {
    constructor() {
        super();

        this.buildProjectList = this.buildProjectList.bind(this);

        this.state = {
            loading: true,
            projects: 0
        };
    }

    buildProjectList() {
        if (this.state.projects == 0) {
            return (
                <li>
                    No projects to display.
                </li>
            );
        }

        // sanity helper to fetch image
        let builder = imageUrlBuilder(sanityClient);

        // map projects set to state
        // returning listing of projects
        return this.state.projects.map(project => {
            return (
                <li className='portfolio__showcase-item'
                    key={`portfolio-project-${project._id}`}>
                    <NavLink className='portfolio__showcase-link'
                        to={`/showcase/${project._id}`}>
                        {project.title}
                    </NavLink>

                    <img className='portfolio__showcase-image' src={builder.image(project.mainImage)} />
                </li>
            );
        });
    }

    componentDidMount() {
        // reset scroll position when transitioning between showcase and single project
        window.scrollTo(0, 0);

        // fetch all sanity projects
        sanityClient.fetch(`*[_type == 'project']{
            _id,
            title,
            slug,
            mainImage,
            excerpt,
            description,
            projectType,
            repository,
            demo,
            techs
        }`).then(projects => {
            // set the whole array in state
            this.setState({
                loading: false,
                projects: projects
            });
        }).catch(() => {
            // no pojects returned
            this.setState({
                loading: false,
                projects: 0
            });
        });
    }

    render() {
        return (
            <div className='portfolio__showcase'>
                <div className='portfolio__showcase-wrapper--left'>
                    <h1>Showcase</h1>

                    <div className='portfolio__body-text'>
                        <p>Have a look at some of my work.</p>
                    </div>
                </div>

                <div className='portfolio__showcase-wrapper--right'>
                    <ul className='portfolio__showcase-links'>
                        {this.state.loading ? <li>Fetching...</li> : null}
                        {this.state.loading ? null : this.buildProjectList()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Showcase;

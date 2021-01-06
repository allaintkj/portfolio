import React from 'react';
import { NavLink } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';

import arrow from '../img/arrow-left-solid.svg';

// sanity helper
import sanityClient from '../../sanityClient';

class Project extends React.Component {
    constructor() {
        super();

        this.buildSelectedProject = this.buildSelectedProject.bind(this);

        this.state = {
            loading: false,
            project: false
        };
    }

    buildSelectedProject() {
        let project = this.state.project;
        // sanity helper to fetch image
        let builder = imageUrlBuilder(sanityClient);

        return (
            <React.Fragment>
                <div className='portfolio__project-col'>
                    <h1 className='mobile'>{project.title}</h1>

                    <div className='portfolio__project__hero-wrapper'>
                        <div className='portfolio__project-hero'>
                            <img src={builder.image(project.mainImage)} />
                        </div>
                    </div>

                    <NavLink className='link mobile'
                        to='/showcase'>
                        <img src={arrow} />
                        Back to Showcase
                    </NavLink>
                </div>
                    
                <div className='portfolio__project-col'>
                    <NavLink className='link desktop'
                        to='/showcase'>
                        <img src={arrow} />
                        Back to Showcase
                    </NavLink>

                    <h1 className='desktop'>{project.title}</h1>

                    <p className='portfolio__body-text'>{project.excerpt}</p>

                    <a className={`portfolio__button ${project.demo ? '' : 'hide'}`}
                        href={project.demo ? project.demo : '/'}
                        rel='noopener noreferrer'
                        target='_blank'>
                        View Demo
                    </a>

                    <a className={`portfolio__button ${project.repository ? '' : 'hide'}`}
                        href={project.repository ? project.repository : '/'}
                        rel='noopener noreferrer'
                        target='_blank'>
                        View Repo
                    </a>
                </div>
            </React.Fragment>
        );
    }

    componentDidMount() {
        // reset scroll position when transitioning between showcase and single project
        window.scrollTo(0, 0);

        // fetch the sanity item from _id route param
        sanityClient.fetch(`*[_type == 'project' && _id == '${this.props.match.params.id}']{
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
        }`).then(result => {
            // set resulting project in state
            this.setState({
                loading: false,
                project: result[0]
            });
        }).catch(() => {
            // nothing returned
            this.setState({
                loading: false,
                project: false
            });
        });
    }

    render() {
        return (
            <div className='portfolio__project'>
                {this.state.loading ? <span>Fetching...</span> : null}
                {this.state.loading ? null : this.buildSelectedProject()}
            </div>
        );
    }
}

export default Project;

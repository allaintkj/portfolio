import React from 'react';
import { NavLink } from 'react-router-dom';
// import imageUrlBuilder from '@sanity/image-url';

// sanity helper
// import sanityClient from '../../sanityClient';

import projects from '../projects.json';
import image from '../img/hero.small.jpg';

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
                <li>
                    No projects to display.
                </li>
            );
        }

        // sanity helper to fetch image
        // let builder = imageUrlBuilder(sanityClient);

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

                    <img className='portfolio__showcase-image' />
                </li>
            );
        });
    }

    componentDidMount() {
        // reset scroll position when transitioning between showcase and single project
        window.scrollTo(0, 0);

        // fetch all sanity projects
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
        //     // set the whole array in state
        //     this.setState({
        //         loading: false,
        //         projects: projects
        //     }, () => console.log(this.state));
        // }).catch(() => {
        //     // no pojects returned
        //     this.setState({
        //         loading: false,
        //         projects: 0
        //     });
        // });
    }

    render() {
        return (
            <div className='portfolio__showcase'>
                <div className='portfolio__showcase-row--featured'>
                    <div className='portfolio__showcase-col'>
                        <div className='portfolio__showcase__title'>
                            <p className='featured'>Featured</p>
                            <h1>Caribou Woods</h1>
                        </div>

                        <div className='portfolio__body-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec lacus et eros iaculis consequat. Sed lorem eros, vestibulum in felis eget, porta molestie nulla. Duis et dui felis
                        </div>

                        <ul className='portfolio__showcase__buttons'>
                            <li><a className='portfolio__button'>View Demo</a></li>
                            <li><a className='portfolio__button--reverse'>View Repo</a></li>
                        </ul>
                    </div>

                    <div className='portfolio__showcase-col'>
                        <img src={image} />
                    </div>
                </div>

                <h2 className='txt-center'>More Projects</h2>

                <div className='portfolio__showcase-row--reverse'>
                    <div className='portfolio__showcase-col'>
                        <div className='portfolio__showcase__title'>
                            <h1>Caribou Woods</h1>
                        </div>

                        <div className='portfolio__body-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec lacus et eros iaculis consequat. Sed lorem eros, vestibulum in felis eget, porta molestie nulla. Duis et dui felis
                        </div>

                        <ul className='portfolio__showcase__buttons'>
                            <li><a className='portfolio__button'>View Demo</a></li>
                            <li><a className='portfolio__button--reverse'>View Repo</a></li>
                        </ul>
                    </div>

                    <div className='portfolio__showcase-col'>
                        <img src={image} />
                    </div>
                </div>
                
                <div className='portfolio__showcase-row'>
                    <div className='portfolio__showcase-col'>
                        <div className='portfolio__showcase__title'>
                            <h1>Caribou Woods</h1>
                        </div>

                        <div className='portfolio__body-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec lacus et eros iaculis consequat. Sed lorem eros, vestibulum in felis eget, porta molestie nulla. Duis et dui felis
                        </div>

                        <ul className='portfolio__showcase__buttons'>
                            <li><a className='portfolio__button'>View Demo</a></li>
                            <li><a className='portfolio__button--reverse'>View Repo</a></li>
                        </ul>
                    </div>

                    <div className='portfolio__showcase-col'>
                        <img src={image} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Showcase;

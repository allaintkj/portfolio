import React from 'react';
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
            return <p className='txt-center'>No projects to display.</p>;
        }

        // sanity helper to fetch image
        let builder = imageUrlBuilder(sanityClient);

        // map projects set to state
        // return listing of projects
        return this.state.projects.map((project, index) => {
            let isFeatured = index == 0;
            let isEven = index % 2 == 0;
            let rowClass = isFeatured ? '--featured' : (isEven ? '' : '--reverse');
            let repoButtonClass = `portfolio__button${project.demo ? '--reverse' : ''}`;

            return (
                <React.Fragment key={`portfolio-project-${project._id}`}>
                    <div className={`portfolio__showcase-row${rowClass}`}>
                        <div className='portfolio__showcase-col'>
                            <div className='portfolio__showcase__title'>
                                <p className={`featured ${isFeatured ? '' : 'hide'}`}>Featured</p>
                                {isFeatured ? <h1>{project.title}</h1> : <h2>{project.title}</h2>}
                            </div>

                            <div className='portfolio__body-text'>
                                {project.description}
                            </div>

                            <ul className='portfolio__showcase__buttons'>
                                <li>
                                    <a className={`portfolio__button ${project.demo ? '' : 'hide'}`}
                                        href={project.demo ? project.demo : '/'}
                                        rel='noopener noreferrer'
                                        target='_blank'>
                                        View Demo
                                    </a>
                                </li>

                                <li>
                                    <a className={`${repoButtonClass} ${project.repository ? '' : 'hide'}`}
                                        href={project.repository ? project.repository : '/'}
                                        rel='noopener noreferrer'
                                        target='_blank'>
                                        View Repo
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={`portfolio__showcase-col ${isFeatured ? 'txt-right' : (isEven ? 'txt-right' : '')}`}>
                            <img src={builder.image(project.mainImage)} />
                        </div>
                    </div>

                    {index == 0 ? <h2 className='txt-center more-projects'>More Projects</h2> : null}
                </React.Fragment>
            );
        });
    }

    componentDidMount() {
        // reset scroll position when transitioning between showcase and single project
        window.scrollTo(0, 0);

        // fetch all sanity projects
        sanityClient.fetch(`*[_type == 'project'] | order(featured desc, title) {
            _id,
            title,
            slug,
            mainImage,
            excerpt,
            description,
            projectType,
            featured,
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
                {this.state.loading ? <p className='txt-center'>Fetching...</p> : null}
                {this.state.loading ? null : this.buildProjectList()}
            </div>
        );
    }
}

export default Showcase;

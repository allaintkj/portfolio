import React from 'react';

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
        if (this.state.projects == 0) { return <p>No projects to display.</p>; }

        return this.state.projects.map((project, index) => {
            let displayLink = (linkUrl, linkLabel) => {
                return (
                    <a className='portfolio__project__link'
                        href={linkUrl}
                        rel='noopener noreferrer'
                        target='_blank'>
                        View the {linkLabel}
                    </a>
                );
            };

            return (
                <div className='portfolio__project'
                    key={`project-list-${index}-${project.title}`}>
                    <h2 className='portfolio__project__title'>{project.title}</h2>
                    <p className='portfolio__project__excerpt'>{project.excerpt}</p>

                    {project.demo ? displayLink(project.demo, 'demo') : null}
                    {project.repository ? displayLink(project.repository, 'repository') : null}

                    <ul className='portfolio__project__techs'>
                        {project.techs.map((tech, index) => {
                            return (
                                <li className='portfolio__project__tech'
                                    key={`project-${project.title}-tech-list-${index}`}>
                                    {tech}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        });
    }

    componentDidMount() {
        sanityClient.fetch(`*[_type == 'project']{
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
            this.setState({
                loading: false,
                projects: projects
            });
        }).catch(() => {
            this.setState({
                loading: false,
                projects: 0
            });
        });
    }

    render() {
        return (
            <div className='portfolio__body--inner'>
                <div className='portfolio__body__title'>
                    <h2 className='portfolio__body__title-text'>Showcase</h2>
                </div>

                <div className='portfolio__body__text'>
                    <p>View some of my work, both completed and ongoing.</p>
                </div>

                <div className='portfolio__project-wrapper'>
                    {this.state.loading ? <p>Fetching...</p> : null}
                    {this.state.loading ? null : this.buildProjectList()}
                </div>
            </div>
        );
    }
}

export default Showcase;

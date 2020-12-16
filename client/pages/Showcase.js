import React from 'react';

// sanity helper
import sanityClient from '../../sanityClient';

class Showcase extends React.Component {
    constructor() {
        super();

        this.buildProjectList = this.buildProjectList.bind(this);

        this.state = {
            projects: false
        };
    }

    buildProjectList() {
        if (!this.state.projects) { return (<p>Currently no projects to show.</p>); }

        return this.state.projects.map((project, index) => {
            return (
                <a className='portfolio__project'
                    href={project.link}
                    key={`project-list-${index}-${project.title}`}
                    rel='noopener noreferrer'
                    target='_blank'>
                    <h2 className='portfolio__project__title'>{project.title}</h2>
                    <p className='portfolio__project__desc'>{project.description}</p>
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
                </a>
            );
        });
    }

    componentDidMount() {
        sanityClient.fetch(`*[_type == 'project']{
            title,
            slug,
            mainImage,
            description,
            projectType,
            link,
            techs
        }`).then(projects => {
            this.setState({
                projects: projects
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
                    {this.buildProjectList()}
                </div>
            </div>
        );
    }
}

export default Showcase;

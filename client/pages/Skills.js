import React from 'react';

// sanity helper
import sanityClient from '../../sanityClient';

class Skills extends React.Component {
    constructor() {
        super();

        this.buildSkillsList = this.buildSkillsList.bind(this);

        this.state = {
            loading: true,
            skills: 0
        };
    }

    buildSkillsList() {
        if (this.state.skills == 0) {
            return <p className='txt-center'>No skill categories were found.</p>;
        }

        return this.state.skills.map((category, index) => {
            return (
                <div className='portfolio__skills__row'
                    key={`portfolio-skill-${category.skill_cat}-${index}`}>
                    <span className='portfolio__skills__category'>{category.skill_cat}</span>

                    <ul className='portfolio__skills__list'>
                        {category.skill_list.map((skillName, skillIndex) => {
                            return (
                                <li className='portfolio__skills__list-item'
                                    key={`portfolio-skill-${category}-${skillName}-${skillIndex}`}>
                                    {skillName}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        });
    }

    componentDidMount() {
        // fetch all skills
        sanityClient.fetch(`*[_type == 'skills'] | order(skill_cat asc) {
            _id,
            skill_cat,
            skill_list
        }`).then(skills => {
            // set the whole array in state
            this.setState({
                loading: false,
                skills: skills
            });
        }).catch(() => {
            // no pojects returned
            this.setState({
                loading: false,
                skills: 0
            });
        });
    }

    render() {
        return (
            <div className='portfolio__skills'>
                <div className='portfolio__skills-col'>
                    <h1>My Skills</h1>

                    <div className='portfolio__body-text'>
                        <p>
                            Much of my experience resides in front-end web work, but I&apos;ve got skills all-around.
                        </p>
                    </div>
                </div>

                <div className='portfolio__skills-col'>
                    {this.state.loading ? <p className='txt-center'>Fetching...</p> : null}
                    {this.state.loading ? null : this.buildSkillsList()}
                </div>
            </div>
        );
    }
}

export default Skills;

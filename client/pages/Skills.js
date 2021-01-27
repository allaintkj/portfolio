import React from 'react';

class Skills extends React.Component {
    constructor() {
        super();

        this.state = {
            skills: [{
                category: 'Essentials',
                skills: ['HTML5', 'CSS3', 'SCSS']
            }, {
                category: 'JS Frameworks',
                skills: ['React', 'Angular', 'Vue', 'jQuery']
            }, {
                category: 'Node',
                skills: ['Express', 'Axios']
            }, {
                category: 'PHP',
                skills: ['Laravel', 'WordPress']
            }, {
                category: 'Database',
                skills: ['MySQL', 'MongoDB', 'Sanity.io']
            }, {
                category: 'Back End',
                skills: ['Nginx', 'Apache2', 'AWS', 'Heroku', 'DigitalOcean']
            }, {
                category: 'Tools',
                skills: ['Sublime Text', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD']
            }]
        };
    }

    render() {
        return (
            <div className='portfolio__skills'>
                <div className='portfolio__skills-col'>
                    <h1>My Skills</h1>

                    <div className='portfolio__body-text'>
                        <p>Much of my experience resides in front-end web work, but I&apos;ve got skills all-around.</p>
                    </div>
                </div>

                <div className='portfolio__skills-col'>
                    {this.state.skills.map((skill, index) => {
                        return (
                            <div className='portfolio__skills__row'
                                key={`portfolio-skill-${skill}-${index}`}>
                                <span className='portfolio__skills__category'>{skill.category}</span>

                                <ul className='portfolio__skills__list'>
                                    {skill.skills.map((skillName, skillIndex) => {
                                        return (
                                            <li className='portfolio__skills__list-item'
                                                key={`portfolio-skill-${skill.category}-${skillName}-${skillIndex}`}>
                                                {skillName}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Skills;

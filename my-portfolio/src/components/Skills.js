import React from 'react';

function Skills() {
        const skills = [
            { name: "Python", icon: 'docs/skills/py.svg' },
            { name: "Machine Learning", icon: 'docs/skills/ml.svg' },
            { name: "Flask", icon: 'docs/skills/fl.svg' },
            { name: "React", icon: 'docs/skills/re.svg' },
            { name: "Java", icon: 'docs/skills/ja.svg' },
            { name: "Web Dev", icon: 'docs/skills/web.svg' },
        ];
    return (
        <div className='skills'>
             <h3>Skills</h3>
             <ul class="skill-list">
                {skills.map((skills, index) =>(
                    <li key = {index}>
                        <img src={skills.icon} alt={skills.name} className='icon' />
                        {skills.name}
                    </li>
                ))}
             </ul>
        </div>
    );
}

export default Skills;
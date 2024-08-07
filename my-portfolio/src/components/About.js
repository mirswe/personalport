import React from 'react';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import Education from './Education';

function About() {
    return (
        <section id="about" className='section'>
        <h2>Background</h2>
        <div className="about-card">
            <p>here here</p>
        </div>
        <Skills />
        <WorkExperience />
        <Education />
        </section>

    );
}

export default About;
import React from 'react';
import AboutUs from './AboutUs';
import Team from './Team';

const About = () => {
  return (
    <section id="about">
        <div className="container">
            <div className="about">
               <AboutUs/>
               <Team/>
            </div>
        </div>
    </section>
  );
};

export default About;
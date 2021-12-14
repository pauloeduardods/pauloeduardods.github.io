import React from 'react';
import profilePhoto from '../../images/profilePhoto.jpeg';
import '../../css/about.css';

function About() {
  return (
    <section id="about" className="bg-yellow-black-img py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">sla</div>
          <img
            src={ profilePhoto }
            alt="Profile"
            className="col-span-6 w-full border-2 border-yellow-400"
          />
        </div>
      </div>
    </section>
  );
}

export default About;

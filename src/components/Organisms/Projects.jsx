import React from 'react';
import ContainerWithBackground from '../Molecules/ContainerWithBackground';

function Projects() {
  return (
    <ContainerWithBackground id="projects" className="pb-12 pt-12" color>
      <h1>Projects</h1>
      <div className="flex justify-center">
        <div className="w-10/12 h-[550px] grid grid-cols-12 grid-rows-6">
          <div className="col-span-11 row-span-5 bg-slate-700"></div>
          <div className="col-span-1 row-span-6 bg-black rounded-tr-xl rounded-br-3xl"></div>
          <div className="col-span-11 row-span-1 bg-slate-900 rounded-bl-xl"></div>

        </div>
      </div>
    </ContainerWithBackground>
  );
}

export default Projects;

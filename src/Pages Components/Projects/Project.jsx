import React from 'react';
import ProjectCard from './ProjectCard';
import ScrollWrapper from '../../utils/ScrollWrapper';
import { projectData } from './ProjectData';


function Projects() {
  return (
    <ScrollWrapper>
      <div id="projects" className="mx-6 min-h-96 md:mx-0 my-[20%] md:my-[10%]">
        <h2 className="text-center text-3xl text-white">My Projects</h2>
        <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 md:mx-6 md:my-8 md:gap-10 lg:mx-auto lg:w-5/6 xl:grid-cols-3 2xl:w-3/4">
          {projectData?.map((project, key) => (
            <ProjectCard key={key} {...project} />
          ))}
        </div>
      </div>
    </ScrollWrapper>
  );
}

export default Projects;

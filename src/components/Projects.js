import React from 'react'
import Project from './Project'

const Projects = ({ projects }) => {
  return (
    <div
      className='portfolio__projects'
      data-aos='zoom-in'
      data-aos-delay='100'
    >
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  )
}

export default Projects

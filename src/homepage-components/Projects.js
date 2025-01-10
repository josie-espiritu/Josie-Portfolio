import React from 'react'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../projects'





const Projects = () => {





  return (
    <section id='projects'>
       <div className="container">
        <h2 className="section-title">Projects</h2>
      </div>
      <div className='container pgrid'>

      {PROJECTS.map((project)=> (
                <ProjectCard data={project}
                />
            ))}


      </div>
    </section>
  )
}

export default Projects

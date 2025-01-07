import React from 'react'
import ProjectCard from './ProjectCard'
import noise from '../assets/noise.png'
import { projects } from '../App'





const Projects = () => {





  return (
    <section id='projects'>
       <div className="container">
        <h2 className="section-title">Projects</h2>
      </div>
      <div className='container pgrid'>

      <ProjectCard title = {projects.title} description = {projects.description}
      link = {projects.link}
      />

<ProjectCard title = {projects.title} description = {projects.description}
      link = {projects.link}
      />

<ProjectCard title = {projects.title} description = {projects.description}
      link = {projects.link}
      />

<ProjectCard title = {projects.title} description = {projects.description}
      link = {projects.link}
      />

{/* {projects.map((project)=> (
                <ProjectCard title = {project.title} description = {project.description}
                link = {project.link}
                />
            ))} */}


      </div>
    </section>
  )
}

export default Projects

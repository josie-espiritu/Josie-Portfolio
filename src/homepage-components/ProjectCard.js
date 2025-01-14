import React from 'react'



 const ProjectCard = (props) => {

  const {src, alt, title, description, link} = props.data

 

  return (
   
      <div className='project-card'>
        <div className='pcard-img'><img src={src} alt={alt}/></div>
        <div className="pcard-desc">
          <div>
            <h3>{title}</h3>
            <p>{description} </p>
          </div>
          <a className='pcard-a' href={link}>View Project</a>
        </div>
      </div>

  )
}

export default ProjectCard

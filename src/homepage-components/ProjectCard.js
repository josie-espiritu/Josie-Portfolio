import React from 'react'
import { projects } from '../App'



 const ProjectCard = (props) => {

 

  return (
   
      <div className='project-card'>
        <div className="pcard-img"> </div>
        <div className="pcard-desc">
          <div>
            <h3>{props.title}</h3>
            <p>{props.description} </p>
          </div>
          <a style={{
            padding: '1rem 0',
            textAlign: 'center',
            borderRadius: '8px',
            backgroundColor: 'pink',
            marginTop: '20px',
            display: 'inline-block',
            textDecoration: 'none',
         
          }} href={props.link}>View Project</a>
        </div>
      </div>

  )
}

export default ProjectCard

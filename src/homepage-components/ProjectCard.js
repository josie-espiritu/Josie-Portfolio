import React from 'react'



 const ProjectCard = (props) => {

  const {src, alt, title, description, link} = props.data

 

  return (
   
      <div className='project-card'>
        {/* <div className="pcard-img" 
        style={{
          backgroundImage: {src}
        }}
        > </div> */}
        <div className='pcard-img'><img src={src} alt={alt}/></div>
        <div className="pcard-desc">
          <div>
            <h3>{title}</h3>
            <p>{description} </p>
          </div>
          <a style={{
            padding: '1rem 0',
            textAlign: 'center',
            borderRadius: '8px',
            backgroundColor: 'pink',
            marginTop: '20px',
            display: 'inline-block',
            textDecoration: 'none',
         
          }} href={link}>View Project</a>
        </div>
      </div>

  )
}

export default ProjectCard

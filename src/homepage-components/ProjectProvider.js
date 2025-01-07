import React, { Children } from 'react'
import { useContext, createContext } from 'react'
import noise from '../assets/noise.png'


export const ProjectContext = createContext()

const ProjectProvider = () => {
  const projects = [
    {
      tittle: 'To Do List',
      image: {noise},
      description : 'This project is made using Context API, and hooks like useReducer and useState',
      link: ''
    }
  ]
  return (
    <ProjectProvider.Provider values= {projects}>
      {Children}
    </ProjectProvider.Provider>
  )
}

export default ProjectContext

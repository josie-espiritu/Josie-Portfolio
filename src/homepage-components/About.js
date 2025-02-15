import React from 'react'
import Skills from './Skills'

const About = () => {
  return (
   <section id='about'>
      <div className='container' >
        <h2 className='section-title'>About me</h2>
        <p style={{
          textIndent: '70px'
        }}>Recent Information Technology graduate with a good foundation for front-end development and creating visually appealing UI designs using Figma. I have developed personal projects using HTML, CSS and ReactJS, and hands-on experience building responsive websites through academic projects. Demonstrated my front-end development capabilities during OJT Training, allowing me to take a small-scale project.   </p>
      </div>

      <Skills/>
   </section>
  )
}

export default About

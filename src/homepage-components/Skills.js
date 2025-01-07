import React from 'react'
import Card from './Card'

const Skills = () => {
  return (
    <section>
     
      <div className='container skills-grid'>
        <div className='skill1'>
          <Card title = 'Education'>
            <h3>Bachelor of Science in Information Technology</h3>
            <h4>Our Lady of Fatima - Antipolo Campus</h4>
            <p>2018 - 2020, 2022 - 2024</p>
            <ul>
              <li>{`Multimedia Champion (Intercampus 2024)`}</li>
              <li>{`Multimedia Champion (IT Days 2024)`}</li>
              <li>{`Dean's Lister (2nd Sem, S.Y. 2022 - 2023)`}</li>
              <li>{`Dean's Lister (1st Sem, S.Y. 2023 - 2024)`}</li>
            </ul>
          </Card>
          <Card title = 'Work Experience'>
          <h3>{`Software Engineer (College Internship)`}</h3>
            <h4>Autum Global Outsourcing</h4>
            <p>Feb 2024 - May 2024</p>
            <ul>
              <li>{'Developed websites using WordPress'}</li>
              <li>{`Designed websites using Figma`}</li>
            </ul>
            <div style={{marginBottom: '30px'}}></div>
            <h3>{`Character Illustrator`}</h3>
            <h4>Freelance</h4>
            <p>June 2022 - Current</p>
            <ul>
              <li>{'Design visually appealing unique characters'}</li>
              <li>{`Design characters according to the client's needs`}</li>
            </ul>
          </Card>
        </div>
        <div className='skill2'>
          <Card title = 'Languages'><ul>
            <li>Filipino</li>
            <li>English</li>
          </ul></Card>
          <Card title = 'Soft Skills'>
            <ul>
              <li>Attention to Detail</li>
              <li>Creativity</li>
              <li>Team Work</li>
              <li>Adaptability</li>
              <li>Collaboration</li>
            </ul>
          </Card>
          <Card title = 'Technical Skills'>
            <ul>
              <li>Knowledge on HTML and CSS</li>
              <li>Familiarity with JavaScript</li>
              <li>Understanding of React.js</li>
              <li>Familiarity with WordPress and Elementor</li>
              <li>{`Version Control (GitHub / Git)`}</li>
            </ul>

            <div className='software'>
              <h4>Software knowledge</h4>
              <ul>
                <li>Git Bash</li>
                <li>Github Desktop</li>
                <li>Figma</li>
                <li>Visual Studio Code</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Skills


import './App.css';
import Navigation from './homepage-components/Navigation';
import Header from './homepage-components/Header';
import About from './homepage-components/About';
import Skills from './homepage-components/Skills';
import Projects from './homepage-components/Projects';
import Footer from './homepage-components/Footer';
import ProjectCard from './homepage-components/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import noise from './assets/noise.png'


export const projects = 
 [ 
  {
    src: noise,
    alt: 'a',
    title: `Grey's Pet Hotel Web Design`,
    description: `Developed using WordPress, and used Figma for the Web Design`,
    link: 'https://greyspethotel.com/',

  },

    {src: noise,
    alt: 'a',
    title: `A To Do List App`,
    description: `This project is made using Context API, and hooks like useReducer and useState`,
    link: 'https://josie-espiritu.github.io/to-do-list/',
}
]





function App() {
  return (
    
    <>
    <nav>
      <Navigation/>
      </nav>

    <header>
      <Header/>
    </header>

    <main>
      <About/>
      <Skills/>
      <Projects/>
    </main>

    <footer>
      <Footer/>
      </footer>
      <div className='criss-cross'></div>
    </>
  );
}

export default App;

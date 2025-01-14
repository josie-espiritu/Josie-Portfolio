import React from 'react'
import noise from '../assets/noise.png'
import IconText from './IconText'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
 
const Header = () => {
  return (
    <section className='header' id='top'>
      <div className='container header-flex'>
        <div className="col1">
          <p>Hi! i am</p>
          <h1>Josie Mar P. Espiritu</h1>
          <h2>I.T. Gradute</h2>
         <div className='ahoi'>
          <a className='git-link' href='https://github.com/josie-espiritu'><IconText><FontAwesomeIcon icon={faGithub}/> <p>https://github.com/josie-espiritu</p> </IconText></a>
            <a className='git-link' href='mailto:espiritu.josiemar@gmail.com'><IconText><FontAwesomeIcon icon={faEnvelope}/> <p>espiritu.josiemar@gmail.com</p></IconText></a>
            <IconText><FontAwesomeIcon icon={faPhone}/> <p >+639694946895</p></IconText>
            <IconText><FontAwesomeIcon icon={faLocationDot}/> <p >Brgy. Sta. Cruz, Antipolo City, Rizal</p></IconText>
         </div>
        </div>
        <div className="col2 profile">
        <img src={noise} alt="a cartoon profile of the author"/>
        </div>
      </div>
    </section>
  )
}

export default Header

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);}

  return (
    <div className='container flex-nav'>
      <h2>JOSIE</h2>

      <ul className='desktop-menu'>
            <li><a href='#top'>Home</a></li>
            <li><a href='#about'>About me</a></li>
            <li><a href='#projects'>Projects</a></li></ul>

      <div className="nav-menu">
        <div className='hamburg' onClick={toggleMenu}
        style={{backgroundColor: isOpen ? 'white': 'transparent',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px'
    }}
        >
          <FontAwesomeIcon icon={faBars} size='2x' className='ham'/></div>
        {isOpen && (<ul style={{ margin: '0'}}>
            <li><a href='#top'>Home</a></li>
            <li><a href='#about'>About me</a></li>
            <li><a href='#projects'>Projects</a></li>
        </ul>)}
      </div>
    </div>
  )
}

export default Navigation

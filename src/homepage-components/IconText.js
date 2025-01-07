import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


const IconText = ({children}) => {
    const styler = {
        display: 'flex',
        
    }

  return (
    <div style={styler} className='header-details' >
      {children}
    </div>
  )
}

export default IconText

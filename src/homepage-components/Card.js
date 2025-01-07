import React from 'react'

const Card = (props) => {
  return (
    <div className='card-body'>
        <div style={{
            display: 'relative'
        }}>
          <div className='card'>
           { props.children}
          </div>
            <div className='card-title'>
               <h2>{props.title}</h2>
            </div>
        </div>
    </div>
  )
}

export default Card

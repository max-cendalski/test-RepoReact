import React from 'react'

export default function Header(props) {
  return (
    <div className='header-container'>
      <h1>{props.appTitle}</h1>
    </div>
  )
}

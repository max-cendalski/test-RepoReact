import './header.css'
import React from 'react'

export default function Header(props) {
  const handleHeaderClick=()=> {
    window.location = "/"
  }
  return (
    <article className='header-container'>
      <h1 className="header" onClick={handleHeaderClick}>{props.appTitle}</h1>
    </article>
  )
}

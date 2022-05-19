import './fade.css'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useState, useEffect } from 'react'


export default class FadeTest extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      photo: 'photo-section',
      fadeState: false,
      invisible:'photo-invisible'
    }
  }

  componentDidMount() {
   console.log('props',this.props)
    setTimeout(()=> {
    if (this.state.fadeState === false) {
    this.setState({
      photo: 'photo-section2',
      fadeState: true
    })
    } else {
        this.setState({
      photo: 'photo-section'
    })
    }
  },100)
}

render() {
  return (
    <article>
    <section className={this.state.invisible}>
       <Navbar/>
    </section>

      <h1>Fade</h1>
      <section className='image-container'>
      <img src='../../images/Greece2.jpg' className={this.state.photo} alt="greec1"/>
      </section>
    </article>
  )
}
}

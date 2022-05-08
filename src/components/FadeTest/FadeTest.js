import './fade.css'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useState, useEffect } from 'react'


export default class FadeTest extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      photo: 'photo-section'
    }
  }

 componentDidMount() {
 setTimeout(()=> {
   this.setState({
     photo: 'photo-section2'
   })
 },100)
}

render() {
  return (
    <article>
    <Navbar />
      <h1>Fade</h1>
      <section className='image-container'>
      <img src='../../images/Greece2.jpg' className={this.state.photo} alt="greec1"/>

      </section>
    </article>
  )
}

}

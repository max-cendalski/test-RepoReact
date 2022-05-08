import './fade.css'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useState, useEffect } from 'react'


export default class FadeTest extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      photo: 'invisible'
    }
  }


render() {
  return (
    <article>
    <Navbar />
      <h1>Fade</h1>
      <section className={this.state.photo}></section>
    </article>


  )
}

}

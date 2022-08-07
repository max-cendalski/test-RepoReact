import React from 'react'
import { Link } from 'react-router-dom';

const  Missing =() => {
  return (
    <article>
      <h1>Something went terrible wrong!!!</h1>
      <Link to ="/">Click to visit Homepage</Link>
    </article>
  )
}

export default Missing;

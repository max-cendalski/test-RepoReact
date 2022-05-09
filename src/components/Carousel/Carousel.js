import React from 'react';
import Navbar from '../Navbar/Navbar'
import './carousel.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';

export default class CarouselComponent extends React.Component {
  render() {
   return (
    <article id='carousel-container'>
      <Navbar />
      <Carousel
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        showThumbs={false}
        stopOnHover={false}
        showIndicators={true}
        animationHandler={'fade'}
        showStatus={false}
        transitionTime={2000}
        dynamicHeight={true}
        >
        <div>
          <p className='carousel-paragraph'>Athens</p>
          <img src="../../images/Greece1.jpg" alt="greece1" />
        </div>
        <div>
          <p className='carousel-paragraph'>Greece</p>
          <img src="../../images/Greece2.jpg" alt="greece2" />
        </div>
        <div>
          <p className='carousel-paragraph'>Athens</p>
          <img src="../../images/Greece3.jpg" alt="greece3" />
        </div>
        <div>
          <p className='carousel-paragraph'>Norway</p>
          <img src="../../images/Norway2.jpg" alt="norway2" />
        </div>
        <div>
          <p className='carousel-paragraph'>Auckland</p>
          <img src="../../images/NZAuckand3.jpg" alt="NZAuckland3" />
        </div>
        <div>
          <p className='carousel-paragraph'>Norway</p>
          <img src="../../images/Norway3.jpg" alt="norway3" />
        </div>
        <div>
          <p className='carousel-paragraph'>Athens</p>
          <img src="../../images/Greece1.jpg" alt="greece1" />
        </div>
      </Carousel>
    </article>
           )
        }
}

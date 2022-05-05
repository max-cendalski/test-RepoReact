import React from 'react';
import Navbar from '../Navbar/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';

export default class CarouselComponent extends React.Component {
  render() {
        return (
          <>
            <Navbar />
                <Carousel
                autoPlay={true}
                infiniteLoop={true}
                >
                <div>
                    <img src="../../images/Greece1.jpg" alt="greece1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="../../images/Greece2.jpg" alt="greece2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                     <img src="../../images/Greece3.jpg" alt="greece3" />

                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
          </>
        )
  }
}

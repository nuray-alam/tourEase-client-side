import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <Carousel fade className="banner">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://media.cntraveler.com/photos/60e612ae0a709e97d73d9c60/3:1/w_5760,h_1920,c_limit/Beach%20Vacation%20Packing%20List-2021_GettyImages-1030311160.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='text-dark text-bolder'>Enjoy Your Tour With No Hassle</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/23vPNym/banner2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className='text-white text-bolder'>Enjoy Tour With No Hassle</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/2t1L7F7/banner3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className='text-dark text-bolder'>Enjoy Tour With No Hassle</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
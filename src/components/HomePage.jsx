import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import gardener from '../images/gardener.jpg'
import nanny from '../images/nanny.jpg'
import maid from '../images/maid.jpg'
import petsitter from '../images/petsitter.jpg'
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div mt-3>
            <center><h1>We Provide The Best Services In Your City </h1></center>
            
            <center><h4 color='red'>Hire Now !</h4><Link to={"/login"} className='btn btn-primary'>Sign In / Sign Up</Link></center>
            <br />
            <Carousel fade>
                <Carousel.Item>
                    <img
                     height="450px"
                        className="d-block w-100"
                        src={gardener}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{color:'orange'}}>Best gardeners in the city</h3>
                        <p><b>These gardeners bring Spring Season wherever they go</b></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    height="450px"
                        className="d-block w-100"
                        src={maid}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{color:'green'}}>Superb house cleaners</h3>
                        <p style={{color:'white'}}><b>They will make your home look better than new</b></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                     height="450px"
                        className="d-block w-100 h-80"
                        src={nanny}
                        alt="Third slide"
                    />

                    <Carousel.Caption >
                        <h3 style={{color:'brown'}}>Highly educated in child education as well as medical services</h3>
                        <p>
                        <b>Will help take care of all of your childs needs : Educational as well as medical</b>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                     height="450px"
                        className="d-block w-100"
                        src={petsitter}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption >
                        <h3 style={{color:'blueviolet'}}>Best pet servies in the city</h3>
                        <p><b>Will help take care of all of your pet's needs as long as you need</b></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

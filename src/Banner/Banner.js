import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import b1 from '../assets/BannerImages/b1.webp';
import b2 from '../assets/BannerImages/b2.webp';
import b3 from '../assets/BannerImages/b3.webp';
import './Banner.css';




const Banner = () => {
    return (
        <div>
            <Carousel className='carousel-img' >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={b1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-dark fw-bold'>
                        <h3>Responsibilities for Doctor</h3>
                        <p>Perform routine check ups on patients
                            Keep detailed notes of the patient
                            Perform diagnostic tests to diagnose patients
                            Recommend patients to see a specialist</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={b2}
                        alt="Second slide"
                    />

                    <Carousel.Caption  className='text-dark fw-bold'>
                        <h3>Qualifications for Doctor</h3>
                        <p> 
                            attention to detail
                            Strong leadership skills
                            Great communication skills to talk with patients about treatment options</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={b3}
                        alt="Third slide"
                    />

                    <Carousel.Caption  className='text-dark fw-bold mt-5'>
                        <h3>Doctor skills and qualifications</h3>
                        <p className='sm-d-none' >
                        A successful Doctor will have certain qualifications and skills in order to demonstrate their ability to perform the duties and responsibilities of the job effectively:
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
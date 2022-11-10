import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import b1 from '../assets/BannerImages/b1.webp';
import b2 from '../assets/BannerImages/b2.webp';
import b3 from '../assets/BannerImages/b3.webp';





const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={b1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
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

                    <Carousel.Caption>
                        <h3>Qualifications for Doctor</h3>
                        <p>Doctorate degree from an accredited medical school
                            Board certification and state license
                            Exceptional time management and attention to detail
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

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
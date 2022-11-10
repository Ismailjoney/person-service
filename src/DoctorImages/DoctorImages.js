import React from 'react';
import { Col, Row } from 'react-bootstrap';
import card1 from '../assets/card1.webp'
import card2 from '../assets/card2.webp'
import card3 from '../assets/card3.webp'
import card4 from '../assets/card4.webp'
import card5 from '../assets/card5.webp'
import card6 from '../assets/card6.webp'

const DoctorImages = () => {
    return (
        <div className='w-75 mx-auto '>
            <h6 className='my-5'>
                A doctor is responsible for all sides of care of a patient. They diagnose, educate, and treat patients to ensure that they have the best possible care. A few of the main duties of a doctor are performing diagnostic tests, recommending specialists for patients, document patient's medical history, and educating patients. They also have to administer vaccines and other treatments. Some of the jobs titles that a doctor could grow into are head of research or hospital president.

                A doctor should have at least 4 years of experience in residency as well as a doctorate degree from an accredited medical school. One of the most important skills that a doctor will have is their ability to diagnose their patients. Another skill is empathy as the doctor will need to relate to their patients. They also need to be able to multitask by working with several different patients.
            </h6>
            <Row sm={12} md={6} lg={3} className='g-5'>
                <Col className='border'>
                    <img className='w-100' src={card1} alt="" />
                </Col>
                <Col>
                    <img className='w-100' src={card2} alt="" />
                </Col>
                <Col>
                    <img className='w-100' src={card3} alt="" />
                </Col>
                <Col>
                    <img className='w-100' src={card4} alt="" />
                </Col>
                <Col>
                    <img className='w-100' src={card5} alt="" />
                </Col>
                <Col>
                    <img className='w-100' src={card6} alt="" />
                </Col>

            </Row>
        </div>
    );
};

export default DoctorImages;
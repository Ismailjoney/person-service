import React from 'react';
import { Col, Row } from 'react-bootstrap';
import lstone from '../assets/lstone.webp';

const DoctorInfo = () => {
    return (
        <div className='mt-5 my-5'>
            <h2 className='mt-5 my-5 text-center'>Doctor Information</h2>
            <Row lg={2} md={6}>
                <Col>
                <p>Prof. Dr. Mohammad Salahuddin is a Cardiologist in Dhaka. His qualification is MBBS, MD (Cardiology). He is a Professor in the Department of Cardiology at National Institute of Cardiovascular Diseases & Hospital. He regularly provides treatment to his patients at Popular Diagnostic Center, Mirpur. Practicing hour of Prof. Dr. Mohammad Salahuddin at Popular Diagnostic Center, Mirpur is 7pm to 9pm (Sun, Mon, Tue & Thu).</p>
                </Col>
                <img src={lstone} alt="" />
                <Col>
                </Col>
            </Row>
        </div>
    );
};

export default DoctorInfo;
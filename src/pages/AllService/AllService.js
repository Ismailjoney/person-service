import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const AllService = ({ service }) => {
    const { img, service_name, text, _id } = service;

    return (
            <div>
                <Col style={{width:'360px'}}  className='mt-5'>
                    <Card >
                        <Card.Img style={{ width: '100%', height: `200px` }} variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{service_name}</Card.Title>
                            {/* <p className='fw-bold'>Tretment Coast :{tretment_price}</p> */}
                            <Card.Text>
                                {text.length > 100 ? text.slice(0, 105) + '... ' : text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
   
    );
};

export default AllService;
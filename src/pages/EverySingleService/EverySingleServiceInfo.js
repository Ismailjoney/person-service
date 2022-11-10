import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const EverySingleServiceInfo = ({service}) => {
     
    const {img,service_name,text,_id,tretment_price} = service;

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{service_name}</Card.Title>
          <Card.Text>
          {text.length > 50 ? text.slice(0, 25) + '... ' : text}
             <p className='fw-bold'> price: {tretment_price}</p>
          </Card.Text>
          <Button variant="primary">
            <Link to={`/details/${_id}`}>Details</Link>
          </Button>
        </Card.Body>
      </Card>
    );
};

export default EverySingleServiceInfo;
import React, { useEffect } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import AllService from '../pages/AllService/AllService';

const Service = () => {

    const services = useLoaderData([])

    return (
        <div>
            <h2 className='text-center'>Service Information</h2>
            <Row sm={12} lg={4} className=''  >
                {
                    services.map(service => <AllService
                        key={service._id}
                        service={service}
                    ></AllService>)
                }
            </Row>
            <div className='w-25 mx-auto mt-5 my-5'>
            <Button variant="outline-success">
                <Link to='/allservicedetails'>See All</Link>
            </Button>
            </div>

        </div>
    );
};

export default Service;
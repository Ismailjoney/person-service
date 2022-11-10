import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import AllService from '../pages/AllService/AllService';

const Service = () => {

    const services = useLoaderData([])

    return (
        <div    >
            <h2>Service Information</h2>
            <div className='d-flex justify-content-evenly  flex-sm-columns' >
                {
                    services.map(service => <AllService
                        key={service._id}
                        service={service}
                    ></AllService>)
                }
            </div>
            <div className='w-25 mx-auto mt-5 my-5'>
            <Button variant="outline-success">
                <Link to='/allservicedetails'>See All</Link>
            </Button>
            </div>

        </div>
    );
};

export default Service;
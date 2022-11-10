import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EverySingleServiceInfo from '../EverySingleService/EverySingleServiceInfo';

const AllServiceDetails = () => {
    
    const allServices = useLoaderData([]);
console.log(allServices)


    return (
        <div  style={{width:'100%',margin:'0 auto'}} >
            {
                allServices.map(service => <EverySingleServiceInfo
                key={service._id}
                service={service}
                ></EverySingleServiceInfo>)
               
            }
        </div>
    );
};

export default AllServiceDetails;
import React from 'react';
import Banner from '../../Banner/Banner';
import DoctorImages from '../../DoctorImages/DoctorImages';
import Service from '../../Service/Service';
 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <DoctorImages></DoctorImages>
        </div>
    );
};

export default Home;
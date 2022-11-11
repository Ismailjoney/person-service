import React from 'react';
import Banner from '../../Banner/Banner';
import DoctorImages from '../../DoctorImages/DoctorImages';
import DoctorInfo from '../../DoctorInfo/DoctorInfo';
import Service from '../../Service/Service';
 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DoctorInfo></DoctorInfo>
            <Service></Service>
            <DoctorImages></DoctorImages>
        </div>
    );
};

export default Home;
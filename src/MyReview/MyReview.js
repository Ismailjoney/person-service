import React, { useEffect } from 'react';

const MyReview = () => {
    const {user} = 
    useEffect(()=>{
        fetch(`http://localhost:5000/feedback`)
    },[])
    return (
        <div>
            
        </div>
    );
};

export default MyReview;
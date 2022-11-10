import React, { useContext, useEffect } from 'react';
import { AuthorContext } from '../AuthProvider/AuthContext';

const MyReview = () => {
    const {user} = useContext(AuthorContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/feedback`)
    },[])
    return (
        <div>
            
        </div>
    );
};

export default MyReview;
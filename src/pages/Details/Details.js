import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { AuthorContext } from '../../AuthProvider/AuthContext';
import UserReview from '../../UserReview/UserReview';

const Details = () => {
    const { user } = useContext(AuthorContext)
    console.log(user);
    const details = useLoaderData()
    const {img, service_name, text, _id, tretment_price } = details;
 

    const handdleReview = event => {
        event.preventDefault()

         const form = event.target
        const name = `${form.name.value}`;
        const message = form.message.value;
        // console.log(message)

   
    const feedBack ={
        service: _id,
        name : service_name,
        price : tretment_price,
        message : message,
    }

        fetch('http://localhost:5000/feedback', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedBack)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.acknowledged){
                    alert(' feedback successfully')
                    form.reset();     
                }
            })
            .catch(er => console.error(er));
    }
    ////////////////////
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/feedback?service=${_id}`)
        .then(res => res.json())
        .then(data =>  setReview(data))
    },[])


    return (
        <div>
            <section>
                <Card  >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{service_name}</Card.Title>
                        <Card.Text>
                            {text}
                            <p className='fw-bold'> price: {tretment_price}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>     
            </section>
            
            <section>
                <Form onSubmit={handdleReview}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Feedback</Form.Label>
                        <Form.Control className='p-5' type="text" name="message" placeholder="Write Your FeedBack" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>    
            </section>
            <div>
                {
                    review.map(rvw => <UserReview
                    key={rvw._id}
                    rvw={rvw}
                     user={user}
                    ></UserReview>)
                }
            </div>
        </div>
    );
}

export default Details;
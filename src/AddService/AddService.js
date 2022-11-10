 
import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';



const AddService = () => {

    const handdleAddService = event => {
        event.preventDefault()

        const form = event.target;
        const imageurl = form.imageUrl.value;
        const  name = form.name.value;
        const  servicename = form.serviceName.value;
        const   text = form.description.value;

        console.log(imageurl,name )

        const serviceInfo = {imageurl,name,servicename,text}

        fetch('http://localhost:5000/Service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Order placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));

    }



    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={handdleAddService}>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name="imageUrl" placeholder="Image Url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control type="text" name="serviceName" placeholder=" service Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control className=' pt-5 py-5' type="text" name="description" placeholder=" description" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddService;
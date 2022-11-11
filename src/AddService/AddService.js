import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddService = () => {

    const handdleAddService = event => {
        event.preventDefault()

        const form = event.target;
        const img = form.imageUrl.value;
        const  service_name= form.name.value;
        const  servicename = form.serviceName.value;
        const   text = form.description.value;
        const tretment_price = form.description.value;

        

        const serviceInfo = {img,service_name,servicename,text,tretment_price}

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
                    form.reset();
                     //added toast
    
 
   
                }
            })
            .catch(er => console.error(er));

    }
   
    const notify = () => toast("Service add succesful",{
        position: "top-center",
        theme:"dark"
    });




    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={handdleAddService}>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name="imageUrl" placeholder="Image Url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="name"  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control type="text" name="serviceName" placeholder=" service Name"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" name="price" placeholder=" service Name"  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control className=' pt-5 py-5' type="text" name="description" placeholder=" description"/>
                </Form.Group>

                <Button onClick={notify}  variant="outline-success" type="submit">
                    Submit
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default AddService;
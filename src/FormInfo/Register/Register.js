import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthorContext } from '../../AuthProvider/AuthContext';

const Register = () => {




    const [error, setError] = useState('');

    const {createUser} = useContext(AuthorContext)
    const navigate = useNavigate()

    const handleRegistration = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photoURl = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        


          //create user account 
          createUser(email,password)
          .then(resualt => {
              const user = resualt.user;
              console.log(user)
              form.reset()
              navigate('/')         
          })
          .catch(error => {
              setError(error.message);
              
          })

    }
 
    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Button  variant="outline-success" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-danger'> {error}</p>
            <p>If you allready user in website pls <Link to='/login'>Log in</Link>now</p>
        </div>
    );
};

export default Register;
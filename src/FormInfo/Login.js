import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthorContext } from '../AuthProvider/AuthContext';


const Login = () => {

    const [error, setError] = useState(``);
    const navigate = useNavigate()
    const googleProvider = new GoogleAuthProvider();
    const {userSingIn, providerLogIn} = useContext(AuthorContext)


    const handdleSingIn = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        userSingIn(email,password)
        .then(resualt => {
            const user = resualt.user;
            console.log(user)
            navigate('/')
            form.reset()
        })
        .catch(error => {
            console.error(error)
            setError(error.message);

        })


    }

    //googlesingin
    const  googleSingIn  = () => {
        providerLogIn(googleProvider )
        .then(res => {
            const user = res.user;
            navigate('/')
            console.log(user);
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={handdleSingIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-danger'> {error}</p>
            <p>If you new please <Link to='/register'>Register Now</Link> </p>
            <Button onClick={googleSingIn}  variant="outline-success">Log In With Google</Button>
        </div>
    );
};

export default Login;
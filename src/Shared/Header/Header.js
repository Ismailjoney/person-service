import React, { useContext }  from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthorContext } from '../../AuthProvider/AuthContext';
 
 
 

const Header = () => {
     const {user, logOut} = useContext(AuthorContext);
     const navigate = useNavigate()
    

     const handleLogout = () => {
        logOut()
        navigate('/blog')
            .then(() => {})
            .catch((error) => console.error(error))
    }


    return (
        <div>
             <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><span className='fw-bold' style={{ color: `red` }}>D</span>octoR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto  my-2 my-lg-0  "
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            {

                                user?.uid || user?.photoURL ?
                                    <>
                                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                                        <Nav.Link as={Link} to="/myreviews">My Reviwes</Nav.Link>
                                        <Nav.Link as={Link} to="/add">Add Services</Nav.Link>
                                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                                        
                                        
                                   </>
                                    :
                                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            } 

                        </Nav>
                        <Nav>
                            {
                                user?.email || user?.photoURL ?
                                    <>
                                        <p>{user?.displayName}</p>
                                        <Image
                                            data-tip data-for="registerTip"
                                            style={{ height: `48px`, margin: '0 50px', }}
                                            roundedCircle
                                            src={user.photoURl}
                                        ></Image>
                                        

                                        <Button onClick={ handleLogout} >Log out</Button>
                                    </> :
                                    <Button className='mt-3 my-3' variant="outline-success">
                                        <Link to='/login'>Log In</Link>
                                    </Button>
                            }
                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
            
          
        </div>
    );
};

export default Header;
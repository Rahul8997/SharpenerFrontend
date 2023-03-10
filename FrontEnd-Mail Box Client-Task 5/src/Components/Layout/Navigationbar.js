import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


const Navigationbar = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand exact to="/">MyWebLink</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link exact to="/">Home</Nav.Link>
                    <Nav.Link exact to="/pofile">Welcome</Nav.Link>
                    <Nav.Link exact to="/composemail">Send Mail</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigationbar

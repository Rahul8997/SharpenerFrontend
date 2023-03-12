import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../Store';


const Navigationbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.authentication.user);
    const handlelogout = () => {
        console.log("logged out");
        dispatch(authActions.setUser(""))
        dispatch(authActions.setToken(""))
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        history.push('/');
    }
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand exact to="/">MyWebLink</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} exact to="/">Home</Nav.Link>
                    <Nav.Link as={Link} exact to="/inbox">Inbox</Nav.Link>
                    <Nav.Link as={Link} exact to="/composemail">Send Mail</Nav.Link>
                    <Nav.Link as={Link} exact to="/sent">Sent</Nav.Link>
                </Nav>
            </Container>
            <Navbar.Collapse className="justify-content-end">
                {user && <Navbar.Text className='mx-3'>
                    <Button variant="primary" onClick={handlelogout}>
                        Logout
                    </Button>
                </Navbar.Text>}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigationbar

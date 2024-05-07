import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
    const cartProducts = useSelector(state => state.cart);

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Redux Toolkit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Products</Nav.Link>
                        </Nav>
                       
                                <Col xs="auto">
                                    {/* <Button type="submit">Submit</Button> */}
                                    <Navbar.Text>
                                        <Nav.Link to='/cart' as={Link}>My Bag {cartProducts.length}</Nav.Link>
                                    </Navbar.Text>
                                </Col>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
}

export default NavBar;

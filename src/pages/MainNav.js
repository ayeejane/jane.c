import React from 'react';
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

export default function MainNav() {

    return (
            <Navbar collapseOnSelect expand='sm'>
                <Container fluid>
                <Navbar.Toggle aria-controls='navbarScroll' data-bs-toggle='collapse' data-bs-target='#navbarScroll' />
                    <Navbar.Collapse>
                        <Nav className='mx-auto'>
                            <Nav.Link>
                                <NavLink 
                                    exact to="/"
                                    className="d-inline-block align-top"
                                >
                                <Image src={logo} className='img-fluid' alt='Personal Logo' width='38%'></Image>
                                </NavLink>
                            </Nav.Link>

                            <Nav.Link>
                                <NavLink 
                                    exact to="/about"
                                    style={{textDecoration: 'none', color:'white'}}
                                    className="d-inline-block mx-4"
                                >
                                About
                                </NavLink>
                            </Nav.Link>

                            <Nav.Link>
                                <NavLink 
                                    exact to="/projects"
                                    style={{textDecoration: 'none', color:'white'}}
                                    className="d-inline-block mx-4"
                                >
                                Projects
                                </NavLink>
                            </Nav.Link>

                            <Nav.Link>
                                <NavLink 
                                    exact to="/connect"
                                    style={{textDecoration: 'none', color:'white'}}
                                    className="d-inline-block mx-4"
                                >
                                Connect
                                </NavLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    );
}
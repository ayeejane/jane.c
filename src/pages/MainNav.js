import React from 'react';
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

export default class MainNav extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand 
                        href='/'
                        style={{textDecoration: 'none', color:'white'}}
                    >
                    <Image src={logo} className='img-fluid' alt='Personal Logo' width='38%'></Image>
                    </Navbar.Brand>
                    <Nav className="d-flex">
                        <NavLink 
                            style={{textDecoration: 'none', color:'white'}}
                            exact to = "/about" 
                            className="mx-4"
                        >
                            About
                        </NavLink>
                        <NavLink 
                            style={{textDecoration: 'none', color:'white'}}
                            exact to = "/projects" 
                            className="mx-4"
                        >
                            Projects
                        </NavLink>
                        <NavLink 
                            style={{textDecoration: 'none', color:'white'}}
                            exact to = "/connect" 
                            className="mx-4"
                        >
                            Connect
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}
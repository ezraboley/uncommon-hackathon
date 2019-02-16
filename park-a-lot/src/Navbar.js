import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

/***
 * This is borrowed code that was bootstrapped with 
 * https://react-bootstrap.github.io/components/navbar/#home
 */

export default class ParkNavbar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Park-A-Lot</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                    <NavDropdown title="Parking Lots" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Open Spots</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Reservations</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Information</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Premium Parking</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}




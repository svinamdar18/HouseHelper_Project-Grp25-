/* import { render } from '@testing-library/react';
import { useState } from 'react';  */
import React  from 'react'
import { Component } from 'react';
/* import { Modal } from 'react-bootstrap'; */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/Logo.png'


class HeaderComponent extends Component {
  
  render() {
   
    return (
      <div>
        <Navbar bg='dark' className='navbar navbar-expand-lg navbar-dark' expand="lg">
          <Container>
            <Navbar.Brand href="/home"><img src={logo} width={200} height={50} alt='HouseHelpers'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
             
              </Nav>
              <Nav>
              <NavDropdown title="Services" id="basic-nav-dropdown" >
              <NavDropdown.Item href="/shownanny/:id">Nanny</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/showmaid/:id">Maid</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/showgardener/:id">Gardener</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/showpetcare/:id">Petcare</NavDropdown.Item>
                </NavDropdown>
            
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

       
      </div>
    )
  }
}

export default HeaderComponent
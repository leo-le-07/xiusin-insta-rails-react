import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const AppNavbar: React.FC = () => {
  return (
    <Navbar bg="primary" variant="light" className="justify-content-center">
      <Navbar.Brand href="#">xiusin</Navbar.Brand>
      <Nav>
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#ures">Albums</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default AppNavbar;


import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div  ><Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">User Details</Navbar.Brand>
      
    </Container>
  </Navbar></div>
  )
}

export default Header
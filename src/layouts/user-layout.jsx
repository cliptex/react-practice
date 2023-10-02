import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'

const UserLayout = () => {
    return (
        <Container fluid>
             <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">User Layout</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={`/home`}>Home</Link>
            <Link to={`/login`}>Login</Link>
            <Link to={`/deleteAccount`}>Delete Account</Link>
            <Link to={`/asdasdasd`}>Geçersiz Link</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <Outlet />
        <footer>Created by Enes ALICI &copy;2023</footer>
        </Container>
  )
}

export default UserLayout
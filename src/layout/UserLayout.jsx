import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
    <Container fluid >
        <Navbar className="bg-dark ">
          <Container>
            <Navbar.Brand  className="text-light" href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="text-light">
                Signed in as: <a className="text-light" href="#login">Enes ALICI</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
            <Outlet />
            <footer className="text-center mt-5 bg-dark text-light p-5">Created by Enes &copy; 2023</footer>
    </Container>
  )
}

export default UserLayout
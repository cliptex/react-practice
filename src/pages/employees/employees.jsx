import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

const Employees = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setEmployees(data)) }, [])
   
    
  return (
      <Container >
          <Outlet />
          <Row>
              {
                  employees.map((employed, i) => (
                      <Col className="d-flex justify-center g-3" key={i}>
                    <Card style={{width:300}} className="text-center" >
                          <CardHeader>{employed.name}</CardHeader>
                          <CardBody>{employed.username} </CardBody>
                          <CardBody>{employed.email}</CardBody>
                          <CardBody>{employed.address?.city} | {employed.address?.street}</CardBody>
                          <CardFooter><Link to={`/employees/${employed.id}`}><Button>Details</Button></Link></CardFooter>
                          </Card>
                          </Col>
                  ))
              }
          </Row>
    </Container>
  )
}

export default Employees
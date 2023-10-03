import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const Employed = () => {
    const params = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then((res) => res.json())
            .then((data) => setUser(data))
    }, [params])
    
  return (
    <Container className="mt-5">
          <Row>
              {
                  user.name  ?
                <Col>
                  <Card className="text-center bg-dark text-light" >
                        <CardHeader>{user.name}</CardHeader>
                        <CardBody>{user.username} </CardBody>
                        <CardBody>{user.email}</CardBody>
                        <CardBody>{user.address?.city} | {user.address?.street}</CardBody>
                  </Card>
                </Col>
               : <Spinner />
              }
          </Row>
    </Container>
  )
}

export default Employed
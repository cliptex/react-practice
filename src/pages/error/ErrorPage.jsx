import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
      <Container className="d-flex flex-column gap-5 text-center mt-5 h-100">
          <h2>Oops!</h2>
      <h3>Üzgünüz, böyle bir sayfa bulunamadı.</h3>
      <Link to="/"><Button variant="outline-primary">Ana Sayfaya git </Button></Link>
    </Container>
  )
}

export default ErrorPage
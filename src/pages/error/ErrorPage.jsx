import React from 'react'
import { Button, Container } from 'react-bootstrap'

const ErrorPage = () => {
  return (
      <Container className="d-flex flex-column gap-5 text-center mt-5 h-100">
          <h2>Oops!</h2>
      <h3>Üzgünüz, böyle bir sayfa bulunamadı.</h3>
      <Button variant="outline-primary">asd </Button>
    </Container>
  )
}

export default ErrorPage
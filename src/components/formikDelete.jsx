import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FormikDel = () => {
  const [id, setId] = useState('');
  const [error, setError] = useState('');
  const [isGreen, setIsGreen] = useState('text-success');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`https://651068243ce5d181df5d39c5.mockapi.io/feedback/${id}`);
      setError('Başarı ile silindi!'); 
    } catch (err) {
      setError(err.message); 
      setIsGreen("text-danger")
    }
  };

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Hesap Silme</h1>
      <Form className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
        <FormGroup controlId="id">
          <FormLabel>ID girin</FormLabel>
          <FormControl
            placeholder="id"
            name="id"
            value={id}
            onChange={handleChange}
          />
        </FormGroup>
        <Button variant="danger" type="submit">
          Gönder
        </Button>
        {error && <p className={isGreen}>{error}</p>}
      </Form>
      <Link to="/"><Button>Back to main page</Button></Link>
    </Container>
  );
};

export default FormikDel;

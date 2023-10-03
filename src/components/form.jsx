import React, { useState } from 'react'
import { Button, Container, Form, FormCheck, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const FormManual = () => {
    const [form, setForm] = useState({
        fullName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        gender: "",
        terms: false
    })

    const [error, setError] = useState({
        fullName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        gender: false,
        terms: false
    })


    const handleInput = (e) => { 
        setForm((prev) => {
            return {
                ...prev,
                [e.target.name]:
                    e.target.name === "terms"
                    ? e.target.checked
                    : e.target.value
            }
        })
        
        }

    const handleSubmit = (e) => {

        
        e.preventDefault()
        if (form.terms === false) {setError(prev => ({...prev,terms: true}))}
        
        if (form.fullName === "") {
            setError(prev => ({...prev,fullName: true}))}
        if (form.lastName === "") {
            setError((prev) => {
                return {
                    ...prev,
                    lastName: true
                }
            })
        }
        if (form.email === "") {
            setError((prev) => {
                return {
                    ...prev,
                    email: true
                }
            })
        }
        if (form.phoneNumber === "") {
            setError((prev) => {
                return {
                    ...prev,
                    phoneNumber: true
                }
            })
        }
        if (form.gender === "") {
            setError((prev) => {
                return {
                    ...prev,
                    gender: true
                }
            })
        }
        else {
             setError((prev) => {
                 return {
                    fullName: false,
                    lastName: false,
                    email: false,
                    phoneNumber: false,
                    gender: false,
                    terms: false
                 }
             })
             alert("Form was sent")
        }
        
    }
    
  return (
      <Container>
          <Form onSubmit={handleSubmit} className="w-100">
              <h1  className="mb-3">Manuel Doğrulama</h1>
              
              <FormGroup className="mb-3">
                  <Form.Label htmlFor='fullName'>Name</Form.Label>
                  <Form.Control
                      type='text'
                      onChange={handleInput}
                      value={form.fullName}
                      name='fullName'
                      id='fullName'
                      className="w-50"
                      placeholder='Enter your name'
                     isInvalid={error.fullName}
                  />
              </FormGroup>

              <FormGroup className="mb-3">
              <Form.Label htmlFor='lastName'>Last Name</Form.Label>
                  <Form.Control
                      type='text'
                      onChange={handleInput}
                      value={form.lastName}
                      name='lastName'
                      id='lastName'
                      className="w-50"
                      placeholder='Enter your last name'
                      isInvalid={error.lastName}
                  />
                  </FormGroup>

              <FormGroup className="mb-3">
              <Form.Label htmlFor='email'>Email</Form.Label>
                  <Form.Control
                      type='mail'
                      onChange={handleInput}
                      value={form.email}
                      name='email'
                      id='email'
                      className="w-50"
                      placeholder='Enter your email'
                      isInvalid={error.email}
                  />
                  </FormGroup>

              <FormGroup className="mb-3">
              <Form.Label htmlFor='phoneNumber'>Phone Number</Form.Label>
                  <Form.Control
                      type='tel'
                      onChange={handleInput}
                      value={form.phoneNumber}
                      name='phoneNumber'
                      id='phoneNumber'
                      className="w-50"
                      placeholder='Enter your phone number'
                      isInvalid={error.phoneNumber}
                  />
                  
              </FormGroup>

              <FormGroup className="mb-3">
                   <Form.Label>Gender</Form.Label>
              <FormGroup className="d-flex">
                  
                  <FormCheck
                      inline
                      type='radio'
                      label="Woman"
                      name='gender'
                      value="woman"
                      onChange={handleInput}
                      isInvalid={error.gender}
                  />
                  <FormCheck
                      inline
                      type='radio'
                      label="Man"
                      name='gender'
                      value="man"
                      onChange={handleInput}
                      isInvalid={error.gender}
                  />
                  <FormCheck
                      inline
                      type='radio'
                      label="Other"
                      name='gender'
                      value="other"
                          onChange={handleInput}
                          isInvalid={error.gender}
                  />
                  </FormGroup>
              </FormGroup>
              <FormGroup className="mb-3">
                  <FormCheck
                      label="I accept the terms and conditions."
                      type='checkbox'
                      name='terms'
                      checked={form.terms}
                      onChange={handleInput}
                      isInvalid={error.terms}
                  />
              </FormGroup>
                  <Button type="submit">Sent</Button>
          </Form>
          <Link to="/"><Button>Back to main page</Button></Link>
    </Container>
  )
}

export default FormManual
import React from 'react';
import { Button, Container, Form, FormCheck, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const SelfFormikYup = () => {

  const values = [
    { dev: 'firstName', user: 'First Name' },
    { dev: 'lastName', user: 'Last Name' },
    { dev: 'email', user: 'Email' },
    ];
    
    const gendersCheck = [
            {dev: "erkek", user:"Erkek"},
            {dev: "kadin", user:"Kadın"},
            {dev: "diger", user:"Diğer"}
    ]

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '', 
    gender: '',
    terms: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required().min(2),
    lastName: Yup.string().required().min(2),
    email: Yup.string().required().email(), 
      terms: Yup.boolean().required(),
    gender: Yup.string().required()
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container>
          <Form className="d-flex flex-column gap-4 mt-4" onSubmit={formik.handleSubmit}>
              
      {values.map((val, i) => (
    <FormGroup controlId={val.dev} key={i}>
        <Form.Label>{val.user}</Form.Label>
        <FormControl
            type="text"
            placeholder={`Enter Your ${val.user}`}
            {...formik.getFieldProps(val.dev)}
            isInvalid={formik.errors[val.dev] && formik.touched[val.dev]}
              />
              {formik.errors[val.dev] && formik.touched[val.dev] &&
                  <p className="text-danger">*{formik.errors[val.dev]}</p>}
    </FormGroup>
))}

        <FormGroup>
          <FormLabel>Gender</FormLabel>
        </FormGroup>
              <FormGroup>
              {
                      gendersCheck.map((gender, i) => (
                          <FormCheck
                              key={i}
                              type="radio"
                              inline
                              isInvalid={formik.errors[gender]}
                              name="gender"
                              id={gender.dev}
                              label={gender.user}
                              {...formik.getFieldProps[gender]}
                          />
                      ))
                  }
              </FormGroup>
        <FormGroup>
          <FormCheck type="checkbox" {...formik.getFieldProps('terms')} id="terms" name="terms" label="Lütfen kullanıcı sözleşmesini kabul edin." />
        </FormGroup>
        <Button type="submit">Gönder</Button>
      </Form>
    </Container>
  );
};

export default SelfFormikYup;

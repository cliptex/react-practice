import { useFormik } from 'formik'
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

const FormikYup = () => {
    
    const initialValues = {
        isminiz: "",
        sifreniz: ""
    }

    const validationSchema = Yup.object({
        isminiz: Yup.string().required("isminiz zorunlu bir alandır, boş bırakmayınız").min(5),
        sifreniz: Yup.string().required("şifreniz zorunlu bir alandır, boş bırakmayınız")
    })

    const onSubmit = (values) => { 
        console.log(values);
    }
    
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })
  return (
      <Container>
          <h1>Formik Yup 1</h1>
          <Form onSubmit={formik.handleSubmit}>
              <label htmlFor='isminiz'>Ad</label>
              <br />
              <input
                  type="text"
                  name='isminiz'
                  id="isminiz"
                  placeholder="Lütfen Adınızı Giriniz."
                  value={formik.values.isminiz}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />
              <br />
              {
                  formik.errors.isminiz && formik.touched.isminiz && <p className = "text-danger">{formik.errors.isminiz}</p>
              }
              
              <input
                  type="password"
                  name='sifreniz'
                  id="sifreniz"
                  placeholder="Lütfen Şifrenizi Giriniz."
                  value={formik.values.sifreniz}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />
              {
                  formik.errors.sifreniz && formik.touched.sifreniz && <p className = "text-danger">{formik.errors.sifreniz}</p>
              }
              <br />
              
              <button type='submit'>Formu Gönder</button>
          </Form>
          <Link to="/"><Button>Back to main page</Button></Link>
    </Container>
  )
}

export default FormikYup
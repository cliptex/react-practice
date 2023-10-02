import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { Button, Container, Form, FormCheck, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import * as Yup from 'yup'


const SelfFormikYup = () => {

  const formItems = [
    {value: "isim", label:"İsim"},
    {value: "soyisim", label:"Soyisim"},
    {value: "email", label:"Email"},
  ]

  const initialValues = ({
    isim: "",
    soyisim: "",
    email: "",
    terms: false
  })

  const validationSchema = Yup.object({
    isim: Yup.string().required().min(2),
    soyisim: Yup.string().required().min(2),
    email: Yup.string().required().email(),
    terms: Yup.boolean().required().isTrue("Kullanıcı Sözleşmesini Kabul Etmeniz Gereklidir.")
  })

  const onSubmit = async (values) => {
    const dto = {
      isim: values.isim,
      soyisim: values.soyisim,
      email: values.email,
      terms: values.terms,
    }
    
    try {
      const res = await axios.post(`https://651068243ce5d181df5d39c5.mockapi.io/feedback`, dto)
      alert(JSON.stringify(res.data))
    }
    catch (err) {
      alert("Hata oluştu")
    }
    
  }


  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })
  return (
    <Container className="mt-4">
      <h1 className="mb-4">Hesap Oluştur</h1>
      <Form className="d-flex flex-column gap-4" onSubmit={formik.handleSubmit}>
        {
          formItems.map((item, i) => (
            <FormGroup key={i} controlId={item.value}>
              <FormLabel>{ item.label}</FormLabel>
            <FormControl
                placeholder={`Lütfen ${item.label} Giriniz.`}
                {...formik.getFieldProps(item.value)}
                isInvalid={formik.errors[item.value] && formik.touched[item.value]}
              />
              {formik.errors[item.value] && formik.touched[item.value] && <p className="text-danger">*{ formik.errors[item.value]}</p>}
            </FormGroup>
            
          ))
        }
        <FormGroup controlId="terms">
          <FormCheck
            type='checkbox'
            label="Kullanıcı sözleşmesini okudum ve kabul ediyorum."
            {...formik.getFieldProps("terms")}
            isInvalid={formik.errors.terms && formik.touched.terms}
          />
          {formik.errors.terms && formik.touched.terms && <p className="text-danger">*{ formik.errors.terms}</p>}
        </FormGroup>
        <Button variant="success" type="submit">Gönder</Button>
      </Form>
    </Container>
  )
}

export default SelfFormikYup
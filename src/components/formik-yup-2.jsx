import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { Button, Container, Form, FormControl, FormLabel } from 'react-bootstrap'
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const FormikYup2 = () => {

    const MySwal = withReactContent(Swal)

    const formFields = [
        { name: "id", label: "ID" },
        { name: "firstName", label: "First Name" },
        { name: "lastName", label: "Last Name" },
        { name: "email", label: "Email" },
        { name: "password", label: "Password" },
    ];

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        id: ""
    };

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(2)
            .required(),
        lastName: Yup.string()
            .required("Please enter your last name")
            .min(2),
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .required()
            .min(6)
            .max(20)
    });

    const onSubmit = async (values, actions) => {
        await axios.post("https://651068243ce5d181df5d39c5.mockapi.io/feedback", values)
            .then( MySwal.fire({
            title: <strong>Success</strong>,
            html: <i>Form has been successfully submitted!</i>,
            icon: 'success'
          })).then(actions.resetForm())
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    return (
        <Container className="mt-5">
            <h1>Formik Yup 2</h1>
            <Form onSubmit={formik.handleSubmit}>
                {formFields.map((field) => (
                    <Form.Group key={field.name} className="mb-3" controlId={field.name}>
                        <FormLabel>{field.label}</FormLabel>
                        <FormControl
                            type={field.name === "password" ? "password" : "text"}
                            placeholder={`Please enter your ${field.label}`}
                            {...formik.getFieldProps(field.name)}
                        />
                        {formik.errors[field.name] && formik.touched[field.name] && (
                            <p className="text-danger">{formik.errors[field.name]}</p>
                        )}
                    </Form.Group>
                ))}
                <Button type="submit" className="w-100">
                    Send
                </Button>
            </Form>
        </Container>
    );
};

export default FormikYup2;
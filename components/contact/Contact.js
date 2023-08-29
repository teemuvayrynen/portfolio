import React, { useState } from "react"
import styled from "styled-components"
import LargeButton from "../buttons/LargeButton"
import emailService from '../../services/sendEmail'
import { Formik, Field, Form, ErrorMessage } from "formik"
import styles from '../../styles/globals'
import * as Yup from "yup"

const Contact = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const [success, setSuccess] = useState(false)

  return (
    <>
      <Container>
        <Formik
          initialValues={{ name: "", phone: "", mail: "", msg: "" }}
          validationSchema={Yup.object({
            name: Yup.string().max(40, "Must be 40 characters or less").required("Required"),
            phone: Yup.string().max(13, "Must be 13 numbers or less").matches(phoneRegExp, "Phone number is not valid").required("Required"),
            mail: Yup.string().email("Invalid email address").required("Required"),
            msg: Yup.string().required("Required")
          })}
          onSubmit={async (values, actions) => {
            const res = await emailService.sendEmail(values)
            const data = res.data    
            if (data.success) {
              actions.resetForm()
              setSuccess(true)
            }
            setTimeout(() => {
              actions.setSubmitting(false)
              setSuccess(false)
            }, 4000)
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <styles.Header>
                Contact me
              </styles.Header>
              <Field 
                name="name" 
                type="text" 
                placeholder="Name" 
                className="form-input"/>
              <ErrorMessage name="name" component="div" className="form-error" />

              <Field 
                name="phone" 
                type="text" 
                placeholder="Phone"
                className="form-input"/>
              <ErrorMessage name="phone" component="div" className="form-error"/>

              <Field 
                name="mail" 
                type="email" 
                placeholder="Email" 
                className="form-input"/>
              <ErrorMessage name="mail" component="div" className="form-error" />

              <Field 
                name="msg" 
                type="text" 
                placeholder="Message"
                as="textarea" 
                className="form-textarea"/>
              <ErrorMessage name="msg" component="div" className="form-error" />
              <LargeButton text="Coming soon! Or not" type="submit" disabled={true} />
              {success ? <Success>Message sent!</Success> : null}
            </Form>
          )}
        </Formik>
      </Container>
    </>
  )
}


const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: rgb(16, 16, 16);
  clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 100%);
`

const Success = styled.div`
  color: white;
  font-weight: bold;
`

export default Contact
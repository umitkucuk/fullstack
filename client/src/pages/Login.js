import React from 'react'
import * as Yup from 'yup'
import { useMutation } from 'react-apollo-hooks'
import { Formik, Form, Field } from 'formik'
import { gql } from 'apollo-boost'

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`

const handleSubsribe = async ({ values, loginMutation, resetForm }) => {
  const loginResult = await loginMutation({
    variables: { input: values },
  })

  if (loginResult) {
    resetForm()
  }
}

const Login = () => {
  const loginMutation = useMutation(LOGIN_MUTATION)

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required('Before submitting you need to provide your email'),
        password: Yup.string().required('Password is required'),
      })}
      render={isSubmitting => (
        <Form>
          <Field type="email" name="email" />
          <Field type="password" name="password" />
          <button type="submit">Submit</button>
        </Form>
      )}
    />
  )
}

export default Login

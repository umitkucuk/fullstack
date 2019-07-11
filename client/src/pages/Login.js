import React from 'react'
import { withRouter } from 'react-router-dom'
import * as Yup from 'yup'
import { useMutation } from 'react-apollo-hooks'
import { Formik, ErrorMessage } from 'formik'
import { get } from 'lodash'

import Page from '../components/Page'
import { Form, Label, Input } from '../components/form'

import { LOGIN_MUTATION } from '../graphql/queries/auth'

const Login = ({ history }) => {
  const loginMutation = useMutation(LOGIN_MUTATION)

  const handleSubmitForm = async ({ values, loginMutation }) => {
    const submitResult = await loginMutation({
      variables: {
        email: values.email,
        password: values.password,
      },
    })
    if (get(submitResult, 'data.login.id')) {
      history.push('/')
    }
  }

  return (
    <Page>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async values =>
          handleSubmitForm({
            values,
            loginMutation,
          })
        }
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required('Before submitting you need to provide your email'),
          password: Yup.string().required('Password is required'),
        })}
        render={({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" value={values.email} onChange={handleChange} />
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
            <ErrorMessage name="password" component="div" />
          </Form>
        )}
      />
    </Page>
  )
}

export default withRouter(Login)

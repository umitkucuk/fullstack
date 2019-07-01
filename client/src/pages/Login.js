import React from 'react'
import { withRouter } from 'react-router-dom'
import * as Yup from 'yup'
import { useMutation } from 'react-apollo-hooks'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { get } from 'lodash'

import { LOGIN_MUTATION } from '../graphql/queries/auth'

import Page from '../components/Page'

const Login = ({ history }) => {
  const loginMutation = useMutation(LOGIN_MUTATION)

  const handleSubmit = async ({ values, loginMutation }) => {
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
          handleSubmit({
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
        render={() => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <button type="submit">Submit</button>
            <ErrorMessage name="password" component="div" />
          </Form>
        )}
      />
    </Page>
  )
}

export default withRouter(Login)

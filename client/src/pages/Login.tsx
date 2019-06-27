import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`

const Login: React.FC = () => {
  let emailInput: any, passwordInput: any

  return (
    <>
      <h1>Login Page</h1>
      <Mutation mutation={LOGIN_MUTATION}>
        {(login: any, { data }: { [key: string]: any }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault()
                login({ variables: { email: emailInput.value, password: passwordInput.value } })
              }}
            >
              <input
                ref={node => {
                  emailInput = node
                }}
              />
              <input
                ref={node => {
                  passwordInput = node
                }}
              />
              <button type="submit">Login</button>
            </form>
          </div>
        )}
      </Mutation>
    </>
  )
}

export default Login

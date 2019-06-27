import { Mutation, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import cookie from 'cookie'
import redirect from '../lib/redirect'

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: { email: $email, password: $password }) {
      email
    }
  }
`

const SigninBox = ({ client }) => {
  let email, password

  return (
    <Mutation
      mutation={LOGIN}
      onCompleted={data => {
        console.log(data)
        client.cache.reset().then(() => {
          redirect({}, '/')
        })
      }}
      onError={error => {
        console.log(error)
      }}
    >
      {(login, { data, error }) => (
        <form
          onSubmit={e => {
            e.preventDefault()
            e.stopPropagation()

            login({
              variables: {
                email: email.value,
                password: password.value
              }
            })

            email.value = password.value = ''
          }}
        >
          {error && <p>No user found with that information.</p>}
          <input
            name="email"
            placeholder="Email"
            ref={node => {
              email = node
            }}
          />
          <br />
          <input
            name="password"
            placeholder="Password"
            ref={node => {
              password = node
            }}
            type="password"
          />
          <br />
          <button>Sign in</button>
        </form>
      )}
    </Mutation>
  )
}

export default withApollo(SigninBox)

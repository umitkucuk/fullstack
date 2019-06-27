import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const REGISTER_MUTATION = gql`
  mutation CreateEnterprise($name: String!, $description: String!) {
    createEnterprise(name: $name, description: $description)
  }
`

const Register: React.FC = () => {
  let nameInput: any, descriptionInput: any

  return (
    <>
      <h1>Create Enterprise</h1>
      <Mutation mutation={REGISTER_MUTATION}>
        {(createEnterprise: any, { data }: { [key: string]: any }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault()
                createEnterprise({ variables: { name: nameInput.value, description: descriptionInput.value } })
              }}
            >
              <input
                ref={node => {
                  nameInput = node
                }}
              />
              <input
                ref={node => {
                  descriptionInput = node
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

export default Register

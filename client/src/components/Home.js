import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  } 

  render() {
    const { email, password } = this.state

    return (
      <Mutation mutation={LOGIN_MUTATION}>
        {(login, { data }) => (
          <form onSubmit={() => login({ variables: { email, password } })}>
            <div>
              <input
                placeholder='email'
                type='text'
                name='email'
                value={email}
                onChange={this.onChange}
              />
              <input
                placeholder='password'
                type='password'
                name='password'
                value={password}
                onChange={this.onChange}
              />
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </form>
        )}
      </Mutation>
    )
  }
}

export default Home

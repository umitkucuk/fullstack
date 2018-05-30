import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const loginMutation = gql`
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
      <Mutation mutation={loginMutation}>
        {mutate => (
          <Fragment>
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
              <button onClick={() => mutate({ variables: { email, password } })}>
                Submit
              </button>
            </div>
          </Fragment>
        )}
      </Mutation>
    )
  }
}

export default Home

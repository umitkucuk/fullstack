import React from 'react'
import Link from 'next/link'

import redirect from '../lib/redirect'
import checkLoggedIn from '../lib/checkLoggedIn'

import SigninBox from '../components/SigninBox'

export default class Signin extends React.Component {
  static async getInitialProps(context) {
    const { loggedInUser } = await checkLoggedIn(context.apolloClient)

    if (loggedInUser.user) {
      redirect(context, '/')
    }

    return {}
  }

  render() {
    return (
      <React.Fragment>
        {/* SigninBox handles all login logic. */}
        <SigninBox />
        <hr />
        New?{' '}
        <Link prefetch href="/create-account">
          <a>Create account</a>
        </Link>
      </React.Fragment>
    )
  }
}
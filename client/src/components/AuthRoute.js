import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { Route, Redirect } from 'react-router-dom'
import { get } from 'lodash'

import { ME_QUERY } from '../graphql/queries/auth'

const AuthRoute = ({ component: Component, ...rest }) => {
  const me = useQuery(ME_QUERY)

  return (
    <Route
      {...rest}
      render={props =>
        get(me, 'data.me.email') ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

export default AuthRoute

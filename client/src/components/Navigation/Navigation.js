import React from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './NavigationStyle'

export default () => {
  return (
    <S.Navigation>
      <NavLink activeClassName="active" exact to="/">
        Dashboard
      </NavLink>
      <NavLink activeClassName="active" exact to="/login">
        Login
      </NavLink>
      <NavLink activeClassName="active" exact to="/register">
        Register
      </NavLink>
    </S.Navigation>
  )
}

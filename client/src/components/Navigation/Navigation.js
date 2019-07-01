import React from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './NavigationStyle'

export default () => {
  return (
    <S.Navigation>
      <S.NavigationLink>
        <NavLink activeClassName="active" exact to="/">
          <S.NavigationLinkIcon />
          Dashboard
        </NavLink>
      </S.NavigationLink>
      <S.NavigationLink>
        <NavLink activeClassName="active" exact to="/login">
          <S.NavigationLinkIcon />
          Login
        </NavLink>
      </S.NavigationLink>
      <S.NavigationLink>
        <NavLink activeClassName="active" exact to="/register">
          <S.NavigationLinkIcon />
          Register
        </NavLink>
      </S.NavigationLink>
    </S.Navigation>
  )
}

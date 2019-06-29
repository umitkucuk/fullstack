import React, { memo } from 'react'
import styled from 'styled-components/macro'

const Main = styled.main`
  padding-left: 250px;
`

function Page({ children }) {
  return <Main>{children}</Main>
}

export default memo(Page)

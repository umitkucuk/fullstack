import React, { memo } from 'react'
import styled from 'styled-components/macro'

import Header from './Header'

const PageContainer = styled.div`
  padding-left: 250px;
`

const Main = styled.div`
  padding: 10rem;
`

const Page = ({ children }) => {
  return (
    <PageContainer>
      {/* <Header /> */}
      <Main>{children}</Main>
    </PageContainer>
  )
}

export default memo(Page)

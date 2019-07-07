import React, { memo } from 'react'
import styled from 'styled-components/macro'

import Header from './Header'

const PageContainer = styled.div`
  padding-left: 250px;
`

function Page({ children }) {
  return (
    <PageContainer>
      {/* <Header /> */}
      <main>{children}</main>
    </PageContainer>
  )
}

export default memo(Page)

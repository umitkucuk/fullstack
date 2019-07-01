import styled from 'styled-components/macro'

export const Navigation = styled.div`
  position: fixed;
  width: 250px;
  height: 100vh;
  left: 0;
  background-color: #f8f8fc;
`

export const NavigationLink = styled.div`
  display: block;

  a {
    color: #111;
    font-weight: 500;
    display: block;
    padding: 1.4rem 2.8rem;

    &:hover {
      color: #6a19d3;
      background-color: #ece8f8;
    }
  }
`

export const NavigationLinkIcon = styled.span`
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: #6a19d3;
  margin-right: 0.5rem;
`

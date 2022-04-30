import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Home() {
  return (
      <Link to={`/main/`}>
        <Container>
            Home
        </Container>
      </Link>
  )
}

export default Home

const Container = styled.div`
    background-color: grey;
    height: calc(100vh);
    width: calc(100vw);
    text-align: center;
    line-height: calc(100vh);
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    font-size: 100px;
`
import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import Upcoming from './Upcoming'
import Reviews from './Reviews'

function Main() {
  return (
    <Container>
      <Header />
      <ImgContainer>
        <Titles>
          <h1>Cari Cari</h1>
          <p>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
        </Titles>
        <Dashboards>
          <Elements>
            <Wrap>
            <img src="/images/icons/like.png" alt="" />
            <p>455</p>
            <p>Label</p>
            </Wrap>
          </Elements>
          <Elements>
            
          </Elements>
          <Elements>
            
          </Elements>
          <Elements>
            
          </Elements>
        </Dashboards>
      </ImgContainer>
      <Upcoming />
      <Reviews />

    </Container>
  )
}

export default Main

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10.42%;
  margin-right: 10.42%;
 `
const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(80vh - 50px);
  &:before{
    height: 80%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    background-image: url("/images/homeImg.png");
    content: "";
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;  
    z-index: -1;
  }
`
const Titles = styled.div`
  max-width: 400px;
  letter-spacing: 2px;
  h1 {
    font-weight: 1000;
    font-size: 60px;
    @media (max-width: 725px) {
      margin-top: 50px;
      font-size: 40px;
    }
  }
`
const Dashboards = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
const Elements = styled.div`
  margin: 0 5px 0 0;
  min-width: 150px;
  width: 20%;
  padding-top: 20%;
  border-radius: 100%;
  border: solid;
  position: relative;
`
const Wrap = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
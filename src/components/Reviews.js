import React from 'react'
import styled from 'styled-components'

function Reviews() {
  return (
    <Container>
      <Nav>
        <h2>Reviews</h2>
        <p>View More</p>
      </Nav>
      <Line />
      <Cardcontainer>
        <Cards>
          <Cardimg src="/images/Img7.png" />
          <Cardtext>
            <Type>
              Folk
            </Type>
            <p>Benny Dayal</p>
          </Cardtext>
          <Cardlinks>
            <a href="">More info</a>
            <img src="/images/icons/save.png" alt="" />
          </Cardlinks>
        </Cards>
        <Cards>
          <Cardimg src="/images/Img6.png" />
          <Cardtext>
            <Type>
              Folk
            </Type>
            <p>Benny Dayal</p>
          </Cardtext>
          <Cardlinks>
            <a href="">More info</a>
            <img src="/images/icons/save.png" alt="" />
          </Cardlinks>
        </Cards>
        <Cards>
          <Cardimg src="/images/Img5.png" />
          <Cardtext>
            <Type>
              Folk
            </Type>
            <p>Benny Dayal</p>
          </Cardtext>
          <Cardlinks>
            <a href="">More info</a>
            <img src="/images/icons/save.png" alt="" />
          </Cardlinks>
        </Cards>
        <Cards>
          <Cardimg src="/images/Img4.png" />
          <Cardtext>
            <Type>
              Folk
            </Type>
            <p>Benny Dayal</p>
          </Cardtext>
          <Cardlinks>
            <a href="">More info</a>
            <img src="/images/icons/save.png" alt="" />
          </Cardlinks>
        </Cards>
      </Cardcontainer>

    </Container>
  )
}

export default Reviews
 const Container = styled.div`
   height: 80px;
   width: 100%;
   
 `
 const Nav = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin: 0;
  }
  p {
    color: yellow;

    &:hover {
      color: blue;
      cursor: pointer;
    }
  }
  @media (max-width:425px) {
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 12px;
    }
  }
 `
 const Line = styled.div`
   background-color: blue;
   margin-top: -20px;
   margin-left: 5px;
   height: 3px;
   width: 40px;
 `
 const Cardcontainer = styled.div`
   width: 100%;
   margin-top: 20px;
   display: flex;
   justify-content: space-between;
   overflow-x: scroll;
   &::-webkit-scrollbar {
    display: none;
  }
 `
 const Cards = styled.div`
  width: 20%;
  min-width: 150px;
  margin: 5px;
 `
 const Cardimg = styled.img`
   width: 100%;
 `
 const Cardtext = styled.div`
  padding: 5px 0;
   p {
     font-weight: 400;
     font-size: 20px;
     margin: 5px 0;
   }
 `
 const Type = styled.div`
   background-color: yellow;
   width: fit-content;
   border-radius: 4px;
   padding: 1px 5px;
   color: black;   
 `
 const Cardlinks = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 0 4px 10px;
   a {
     text-decoration: none;
   }
 `
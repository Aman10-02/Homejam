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
          <Reviewperson>
            <Personimg>
              <Cardimg src="/images/Img1.png" />
            </Personimg>
            <Persondetail>
              <Name>
                Hellen Jummy
              </Name>
              <Country>
                <img src="/images/icons/us.png" alt="" />
                <p>PALOALTO, CA</p>
              </Country>
            </Persondetail>
          </Reviewperson>
          <Textreview>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.
          </Textreview>
        </Cards>
        <Cards>
          <Reviewperson>
            <Personimg>
              <Cardimg src="/images/Img1.png" />
            </Personimg>
            <Persondetail>
              <Name>
                Hellen Jummy
              </Name>
              <Country>
                <img src="/images/icons/us.png" alt="" />
                <p>PALOALTO, CA</p>
              </Country>
            </Persondetail>
          </Reviewperson>
          <Textreview>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.
          </Textreview>
        </Cards>
        <Cards>
          <Reviewperson>
            <Personimg>
              <Cardimg src="/images/Img1.png" />
            </Personimg>
            <Persondetail>
              <Name>
                Hellen Jummy
              </Name>
              <Country>
                <img src="/images/icons/us.png" alt="" />
                <p>PALOALTO, CA</p>
              </Country>
            </Persondetail>
          </Reviewperson>
          <Textreview>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.
          </Textreview>
        </Cards>
      </Cardcontainer>

    </Container>
  )
}

export default Reviews
 const Container = styled.div`
   height: 60px;
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
   margin-top: -13px;
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
    width: 33%;
    height: 150px;
    padding: 10px 20px;
    border-radius: 10px;
    border: solid;
    border-color: yellow;
    min-width: 280px;
    margin: 15px 8px 20px 8px;
    //box-shadow: 10px -10px #0000ff;
    box-shadow: 7px -10px 4px 2px #16d0c0cc;
  `
  const Reviewperson = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  `
 const Personimg = styled.div`
   height: 50px;
   width: 50px;
   border-radius: 100%;
 `
 const Cardimg = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
 `
//  const Type = styled.div`
//    background-color: yellow;
//    width: fit-content;
//    border-radius: 4px;
//    padding: 1px 5px;
//    color: black;   
//  `

const Persondetail = styled.div`
  padding-left: 20px;
  width: calc(100% - 100px);
  height: 50px;
`
const Name = styled.div`
  width: 100%;
  height: 50%;
`
const Country = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  img {
    margin-right: 8px;
  }
`

 const Textreview = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 0 4px 10px;
 `
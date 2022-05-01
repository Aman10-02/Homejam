import React from 'react'
import styled from 'styled-components'
import { selectHeroes } from '../features/hero/heroSlice'
import {useSelector} from 'react-redux'
import {useState} from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Upcoming() {

  const heroes = useSelector(selectHeroes)
  const [indx, setindx] = useState()

  return (
    <Container>
      <Nav>
        <h2>Upcoming Shows</h2>
        <p>View More</p>
      </Nav>
      <Line />
      <Cardcontainer>
        {heroes && heroes.map((hero, index)=> (
          <Cards  key={index}>
          <Cardimg src={hero.img} />
          <Cardtext>
            <Type>
              {hero.type}
            </Type>
            <p>{hero.name}</p>
          </Cardtext>
          <Cardlinks>
            <Info>More info <Arrow /> </Info>
            <img onClick={()=> {setindx(index)} } src= {(index === indx)?"/images/icons/group.png" : "/images/icons/save.png" } alt="" />
          </Cardlinks>
        </Cards>
        ))}
      </Cardcontainer>

    </Container>
  )
}

export default Upcoming
 const Container = styled.div`
   width: 100%;
   
 `
 const Nav = styled.div`
  height: 80px;
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
  min-width: 170px;
  border-radius: 15px 15px 0 0;
  margin: 15px 10px 10px 5px;
  box-shadow: 5px -7px 5px 3px #0000ff;
 `
 const Cardimg = styled.img`
   width: 100%;
 `
 const Cardtext = styled.div`
  padding: 5px 5px;
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
   align-items: center;
   padding: 0 4px 10px;
   img {
     cursor: pointer;
   }
  `
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: blue;
  font-size: 17px;
  cursor: pointer;
  &:hover{
    color: violet;
  }
`
 const Arrow = styled(ArrowRightAltIcon)``
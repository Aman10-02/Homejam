import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from 'react'
function Header() {
    const [Status, setStatus] = useState(false);

  return (
    <Components>
        <Logo src="/images/logo.png" alt="" />
        <Container>
            <Search>
                <img src="/images/icons/search.png" alt="" />
                <p>Search</p>
            </Search>
            <Hidingmenu>
                <p>Help</p>
                <p>Account</p>
            </Hidingmenu>
            <Basket src="/images/icons/Basket.png" />
            <Menuwrap>
                <Menu onClick={()=> setStatus(true) } />
            </Menuwrap> 
            {
                Status && 
                <Dropdown>
                    <Closewrap>
                        <Close onClick={()=> setStatus(false) } />
                        </Closewrap>
                        <p>Help</p>
                        <p>Account</p>
                </Dropdown>
            }
        </Container>
    </Components>
  )
}

export default Header

const Components= styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    background-color: transparent;
`
const Logo = styled.img`
    height: 100%;
`
const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
`
const Search = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 5px;

    p {
        padding-left: 5px;
        font-weight: 600;
        font-size: 20px;
        @media (max-width: 500px) {
        display: none;
        }
    }

    img {
        height: 18px;
    }

`
const Hidingmenu = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 5px;
    font-size: 20px;
    font-weight: 600;
    p {
        padding: 5px;
    }
    @media (max-width: 500px) {
        display: none;
    }
`
const Basket = styled.img`
    height: 30px;
`
const Menuwrap = styled.div`
    
    align-items: center;
    display: none;

    @media (max-width: 500px) {
        margin: 0 5px;
        cursor: pointer;
        display: flex;
    }
`
const Menu = styled(MenuIcon)`
    
`
const Dropdown = styled.div`
    border-top: solid 1px;
    border-bottom: solid 1px;
    background-color: black;
    padding: 0 0 10px 10.42%;
    position: fixed;
    min-width: 100px;
    top: 50px;
    left: 0;
    right: 0;
`
const Closewrap = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 5px 10px;
`
const Close = styled(CloseIcon)`
    cursor: pointer;
`
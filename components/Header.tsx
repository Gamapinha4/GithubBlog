'use client'
import Image from "next/image";
import styled, { createGlobalStyle } from "styled-components";

import imgBackground from '../assets/Cover.png'
import Logo from '../assets/Logo.png'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const LogoStyled = styled(Image)`
    width: 148px;
    height: 100px;
    position: absolute;
    margin-top: -140px;
`

export default function Header() {

    return(
        <Container>
            <GlobalStyle/>
            <Image src={imgBackground} alt="" style={{width: '100%', height: '300px'}}/>
            {<LogoStyled src={Logo} alt=""/>}
        </Container>
    )
}
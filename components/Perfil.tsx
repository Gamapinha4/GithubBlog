'use client'

import styled from "styled-components"
import photo from '../assets/photo.png'
import Image from "next/image"
import GithubLabel from '../assets/github.png'
import Share from "./Icons/Share"
import Github from "./Icons/Github"
import Empresa from "./Icons/Empresa"
import Person from "./Icons/Person"

const Container = styled.div`
    max-width: 864px;
    max-height: 212px;
    margin-top: -6%;

    border-radius: 10px;
    background: var(--base-profile);
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

    display: flex;
    flex: 1;
    flex-direction: row;
`

const ContainerText = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    margin-left: 32px;
    margin-top: 40px;
    margin-bottom: 31px;
    margin-right: 32px;
`

const ContainerTitle = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`

const Title = styled.text`
    color: var(--base-title);

    font-family: inherit;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
`

const GithubText = styled.a`
    font-size: 16px;
    font-family: inherit;
    color: var(--color-blue);
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    cursor: pointer;

    svg {
        margin-left: 8px;
    }
`

const SubText = styled.text`
    color: var(--base-text);

    font-family: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;

    margin-top: 8px;
`

const ContainerTypes = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 24px;
    margin-right: 200px;

`

const Types = styled.text`
    color: var(--base-subtitle);

    font-family: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;

    display: flex;
    flex: 1;
    align-items: center;

    svg {
        margin-right: 8px;
    }
`



export default function Perfil() {

    function handleClick(item: any) {
        if (typeof window !== "undefined") {
          window.open(item, "_blank");
        }
      }

    return(
        <Container>
            <Image src={photo} alt="" width={148} height={148} style={{borderRadius: '8px', marginLeft: '40px', marginTop: '32px', marginBottom: '32px'}}/>
            <ContainerText>
                <ContainerTitle>
                    <Title>Cameron Williamson</Title>
                    <GithubText onClick={() => handleClick('https://github.com/cameronwll')}>Github<Share/></GithubText>
                </ContainerTitle>
                <SubText>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</SubText>
                <ContainerTypes>
                    <Types><Github/> cameronwll</Types>
                    <Types><Empresa/> Rocketseat</Types>
                    <Types><Person/>32 seguidores</Types>
                </ContainerTypes>
            </ContainerText>
        </Container>
    )
}
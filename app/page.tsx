'use client'

import styled from "styled-components"
import photo from '../assets/photo.png'
import Image from "next/image"
import GithubLabel from '../assets/github.png'
import Share from "../components/Icons/Share"
import Github from "../components/Icons/Github"
import Empresa from "../components/Icons/Empresa"
import Person from "../components/Icons/Person"
import Perfil from "@/components/Perfil"
import Input from "@/components/Input"
import Link from "next/link"

const ContainerPage = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    flex-direction: column;
`

const ContainerInput = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;

    flex-direction: row;
    margin-top: 72px;
    margin-bottom: 12px;
`

const Text = styled.text`
  color: var(--base-subtitle);

  font-family: inherit;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
`

const SubText = styled.text`
  color: var(--base-span);
  text-align: right;

  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`

const InputStyled = styled.input`
    display: flex;
    width: 864px;
    padding: 12px 16px;
    align-items: center;
    gap: 8px;

    border-radius: 6px;
    border: 1px solid var(--base-border);
    background: var(--base-input);

    color: var(--base-label);

    font-family: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; 

    margin-bottom: 48px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 416px);
  grid-template-rows: repeat(3, 260px);
  gap: 25px;
  margin: 45px 60px;
  margin-bottom: 234px;
`;

const GridTemplate = styled.div`
  width: 416px;
  height: 260px;
  flex-shrink: 0;

  border-radius: 10px;
  background: var(--base-post);
`

const GridTemplateContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  margin: 32px;
`

const GridTemplateTitle = styled(Link)`
  width: 243px;

  color: var(--base-title);
  font-family: inherit;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; 
  text-decoration: none;
`

const GridTemplateTime = styled.text`
  color: var(--base-span);

  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`

const GridTemplateInfo = styled.text`
  width: 252px;
  height: 112px;

  overflow: hidden;
  color: var(--base-text);
  text-overflow: ellipsis;

  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  margin-bottom: 32px;
`

export default function Home() {



  return (
    <ContainerPage>
      <Perfil/>

      <div>
        <ContainerInput>
          <Text>Publicações</Text>
          <SubText>6 publicações</SubText>
        </ContainerInput>
        <InputStyled placeholder="Buscar conteúdo"/>
      </div>

      <GridContainer>
          <GridTemplate>
            <GridTemplateContainer>
              <GridTemplateTitle href={'/1'}>JavaScript data types and data structures</GridTemplateTitle>
              <GridTemplateTime>Há 1 dia</GridTemplateTime>
            </GridTemplateContainer>
            <div style={{margin: '0px 32px', marginBottom: '32px'}}><GridTemplateInfo>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...</GridTemplateInfo></div>
          </GridTemplate>
          <GridTemplate>
            <GridTemplateContainer>
              <GridTemplateTitle href={'/1'}>JavaScript data types and data structures</GridTemplateTitle>
              <GridTemplateTime>Há 1 dia</GridTemplateTime>
            </GridTemplateContainer>
            <div style={{margin: '0px 32px', marginBottom: '32px'}}><GridTemplateInfo>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...</GridTemplateInfo></div>
          </GridTemplate>
          <GridTemplate>
            <GridTemplateContainer>
              <GridTemplateTitle href={'/1'}>JavaScript data types and data structures</GridTemplateTitle>
              <GridTemplateTime>Há 1 dia</GridTemplateTime>
            </GridTemplateContainer>
            <div style={{margin: '0px 32px', marginBottom: '32px'}}><GridTemplateInfo>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...</GridTemplateInfo></div>
          </GridTemplate>
          <GridTemplate>
            <GridTemplateContainer>
              <GridTemplateTitle href={'/1'}>JavaScript data types and data structures</GridTemplateTitle>
              <GridTemplateTime>Há 1 dia</GridTemplateTime>
            </GridTemplateContainer>
            <div style={{margin: '0px 32px', marginBottom: '32px'}}><GridTemplateInfo>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...</GridTemplateInfo></div>
          </GridTemplate>
          <GridTemplate>
            <GridTemplateContainer>
              <GridTemplateTitle href={'/1'}>JavaScript data types and data structures</GridTemplateTitle>
              <GridTemplateTime>Há 1 dia</GridTemplateTime>
            </GridTemplateContainer>
            <div style={{margin: '0px 32px', marginBottom: '32px'}}><GridTemplateInfo>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...</GridTemplateInfo></div>
          </GridTemplate>
          <GridTemplate>
            <GridTemplateContainer>
              <GridTemplateTitle href={'/1'}>JavaScript data types and data structures</GridTemplateTitle>
              <GridTemplateTime>Há 1 dia</GridTemplateTime>
            </GridTemplateContainer>
            <div style={{margin: '0px 32px', marginBottom: '32px'}}><GridTemplateInfo>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...</GridTemplateInfo></div>
          </GridTemplate>
      </GridContainer>
    </ContainerPage>
  );
}

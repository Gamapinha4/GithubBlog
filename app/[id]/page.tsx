'use client'
import Comment from "@/components/Icons/Comment"
import Date from "@/components/Icons/Date"
import Github from "@/components/Icons/Github"
import Return from "@/components/Icons/Retrun"
import Share from "@/components/Icons/Share"
import Link from "next/link"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ContainerInfos = styled.div`
    width: 864px;
    height: 168px;
    flex-shrink: 0;

    border-radius: 10px;
    background: var(--base-profile);
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

    margin-top: -120px;
`

const ContainerButtons = styled.div`
   display: flex;
   flex: 1;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   margin: 0px 32px;
   margin-top: 32px;
   margin-bottom: 20px;
`

const ButtonReturn = styled(Link)`
   display: flex;
   align-items: center;
   color: var(--color-blue);
   cursor: pointer ;
   font-family: inherit;
   text-transform: uppercase;
   font-size: 12px;
   font-weight: 600;
   text-decoration: none;
   
   svg {
        margin: 8px;
   }
`

const ButtonGithub = styled.a`
   display: flex;
   align-items: center;
   color: var(--color-blue);
   cursor: pointer ;
   font-family: inherit;
   text-transform: uppercase;
   font-size: 12px;
   font-weight: 600;
   
   svg {
        margin: 8px;
   }
`

const Title = styled.text`
    width: 800px;
    color: var(--base-title);

    font-family: inherit;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;

    margin: 0px 44px;
`

const ContainerTypes = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 10px;
    margin-right: 430px;
    margin-left: 40px;
    margin-bottom: 20px;

`

const Types = styled.text`
    color: var(--base-span);

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

const TextContainer = styled.div`
    width: 864px;
    margin-top: 40px;
`

const TextDocument = styled.text`
    color: var(--base-text);

    font-family: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;

    a {
        color: var(--color-blue);
        text-decoration: underline;
        cursor: pointer;
    }
`

const ContainerCode = styled.div`
    display: flex;
    padding: 16px;
    gap: 8px;
    align-self: stretch;
    border-radius: 2px;
    background: var(--base-post);
    flex-direction: column;

    margin: 0px 32px;
    margin-top: 40px;
`

const TextCode = styled.text`
    color: #D5DCE3;
    font-family: "Fira Code";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;

    .function {
        color: #80ABD6;
    }

    .comment {
        color: #4F6173;
        margin-left: 40px;
    }

    span {
        color: #6AD445;
    }
`


export default function Page(props : { params: {id: string}}) {

    
    function handleClick(item: any) {
        if (typeof window !== "undefined") {
          window.open(item, "_blank");
        }
      }

    return(
        <Container>
            <ContainerInfos>
                <ContainerButtons>
                    <ButtonReturn href={'/'}><Return/>Voltar</ButtonReturn>
                    <ButtonGithub onClick={() => handleClick('https://github.com/cameronwll/1')}>Ver no Github<Share/></ButtonGithub>
                </ContainerButtons>
                <Title>JavaScript data types and data structures</Title>
                <ContainerTypes>
                    <Types><Github/> cameronwll</Types>
                    <Types><Date/> Há 1 dia</Types>
                    <Types><Comment/> 5 comentários</Types>
                </ContainerTypes>
            </ContainerInfos>
            <TextContainer>
                <div style={{marginLeft: '32px', marginRight: '32px'}}><TextDocument><strong>Programming languages all have built-in data structures, but these often differ from one language to another.</strong> This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</TextDocument></div>
                <div style={{marginLeft: '32px', marginRight: '32px', marginTop: '40px'}}><TextDocument><a onClick={() => handleClick('https://www.educative.io/answers/what-is-dynamic-typing#:~:text=Overview,even%20if%20they%20contain%20errors.')}>Dynamic typing</a></TextDocument></div>
                <div style={{marginLeft: '32px', marginRight: '32px'}}><TextDocument>JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:             </TextDocument></div>
            
                <ContainerCode>
                    <TextCode><span className="function">let</span> foo = <span>42</span>;<span className="comment">// foo is now a number foo</span></TextCode>
                    <TextCode>foo = <span>'bar'</span>;<span className="comment">// foo is now a string</span></TextCode>
                    <TextCode>foo = <span>true</span>;<span className="comment">// foo is now a boolean</span></TextCode>
                </ContainerCode>
            </TextContainer>
        </Container>
    )
}
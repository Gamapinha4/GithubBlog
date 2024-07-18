'use client'
import styled from "styled-components"

const InputStyled = styled(Input)`
    display: flex;
    width: 864px;
    padding: 12px 16px;
    align-items: center;
    gap: 8px;

    border-radius: 6px;
    order: 1px solid var(--base-border);
    background: var(--base-input);
`

export default function Input() {

    return(
        <>
            <InputStyled/>
        </>
    )
}
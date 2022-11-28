import styled from "styled-components";
export const LabelsItem = styled.button`
    color: hsl(180, 29%, 50%);
    font-weight: 700;

    background-color: hsl(180, 52%, 96%);
    padding: 0.5rem;

    border: none;
    cursor: pointer;

    transition:all .5s ease-in-out;

    &:hover{
        background-color: hsl(180,29%,50%);
        color: white
    }
`
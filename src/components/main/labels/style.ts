import styled from "styled-components";
export const Labels = styled.div`
    align-self: center;
    justify-self: end;
    display: flex;
    gap: 1rem;

    @media screen and (max-width:900px){
        justify-self: flex-start;
        flex-wrap: wrap;
    }
`
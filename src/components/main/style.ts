import styled from "styled-components";
export const Main = styled.main`
    width: 80%;
    justify-self: center;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    margin-bottom: 2rem;

    @media screen and (max-width:900px){
        margin-top: 4rem;
        gap: 8rem;
    }
`
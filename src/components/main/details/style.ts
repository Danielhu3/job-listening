import styled from "styled-components";
export const Details = styled.ul`
    display: flex;
    gap: 3rem;

    color: hsl(180, 8%, 52%);

    & :first-child{
       list-style: none;
    }

    @media screen and (max-width:900px){
        border-bottom: 1px solid hsl(180,8%,52%);
        padding-bottom: 1rem;
    }
`
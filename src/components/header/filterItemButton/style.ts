import styled from "styled-components";
import iconRemove from '../../../moduleImages/icon-remove.svg';
export const FilterItemButton = styled.button`
    cursor: pointer;
    border: none;
    background-image: url(${iconRemove});
    background-repeat: no-repeat;
    background-position: center;
    background-color: hsl(180, 29%, 50%);

    padding: 1rem 1.5rem;

    transition: all .5s ease-in-out;

    &:hover{
        background-color: hsl(180,14%,20%);
    }
`
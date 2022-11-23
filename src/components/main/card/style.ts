import styled from "styled-components";
export const Card = styled.div`
    width: 100%;
    height: 12rem;
    background: white;

    display: grid;
    grid-template-columns: 1fr 3fr 4fr;
    grid-template-areas: 'icon info labels';

   
    padding: 0 2rem;

`
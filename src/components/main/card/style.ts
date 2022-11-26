import styled from "styled-components";
export const Card = styled.div.attrs((props: {isFeatured:boolean}) => props)`
    width: 100%;
    height: 12rem;
    background: white;

    display: grid;
    grid-template-columns: 1fr 3fr 4fr;
    grid-template-areas: 'icon info labels';

    padding: 0 2rem;

    border-radius: 0.5rem;
    box-shadow: 0px 10px 15px -7px hsla(180,29%,50%,0.5);

    border-left:${(props)=> props.isFeatured ? '5px solid hsl(180, 29%, 50%);': 'none'}


`
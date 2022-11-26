import styled from "styled-components";
export const FilterBar = styled.div.attrs((props: {filters: Array<string>}) => props)`
    width: 80%;
    height: 6rem;
    background: white;

    position: absolute;
    top: 12rem;

    display: flex;
    align-items: center;
    padding: 2rem;
    gap: 0.5rem;

    display: ${(props)=> props.filters.length === 0 && 'none'};
    

`
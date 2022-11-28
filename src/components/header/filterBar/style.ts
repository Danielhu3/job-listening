import styled from "styled-components";
export const FilterBar = styled.div.attrs((props: {filters: Array<string>}) => props)`
    width: 80%;
    height: 6rem;
    background: white;

    position: absolute;
    top: 4rem;


    border-radius: 0.5rem;
    box-shadow: 0px 10px 15px -7px hsla(180,29%,50%,0.5);

    padding: 2rem;

    display: ${(props)=> props.filters.length === 0 ? 'none' : 'flex'};
    align-items: center;
    justify-content: space-between;

`
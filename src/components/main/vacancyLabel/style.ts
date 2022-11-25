import styled from "styled-components";
export const VacancyLabel = styled.p.attrs((props: {labelType: string}) => props)`
    color: white;
    padding: 0.2rem 0.8rem;
    border-radius: 2rem;
    font-weight: 700;
    background-color: ${(props)=> props.labelType === 'new!' ? 'hsl(180, 29%, 50%);' : 'hsl(180, 14%, 20%);'};


`
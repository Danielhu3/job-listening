import styled from "styled-components";
import bgDesktop from '../../moduleImages/bg-header-desktop.svg';
import bgMobile from '../../moduleImages/bg-header-mobile.svg';
export const Header = styled.header`
    grid-area: header;
    background-image: url(${bgDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: hsl(180, 29%, 50%);

    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;

    @media screen and (max-width:900px){
        background-image: url(${bgMobile});
    }
    `
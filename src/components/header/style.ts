import styled from "styled-components";
import bgDesktop from '../../images/bg-header-desktop.svg';
//import bgMobile from '../../images/bg-header-mobile.svg';
export const Header = styled.header`
    grid-area: header;
    background-image: url(${bgDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: hsl(180, 29%, 50%);
    `
import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'League Spartan', sans-serif;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-size: 1.5rem;
        font-weight: 500;
    }

    .App{
        height: 100vh;
        display: grid;
        grid-template-rows: 1.5fr 8.5fr;
        grid-template-areas: 'header'
                             'main';
        gap: 6rem;

        background-color: hsl(180, 52%, 96%);
    }


`
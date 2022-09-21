import { createGlobalStyle } from "styled-components";

const GlobalStyles= createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Nanum Pen Script', cursive;
        font-family: 'Jua', sans-serif;

    }
    body{
        background-color: #f6f6f6;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Jua', sans-serif;
        min-height: 100vh;
        margin: 0px;
    }

    #root {
        background-color: white;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    
`;

export default GlobalStyles;
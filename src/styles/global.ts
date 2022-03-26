import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: none;
        border: none;
        outline: none;
        list-style: none;
        text-decoration: none;
        font-family: 'Open Sans', sans-serif;
    }
    body{
        color: ${(props) => props.theme.colors.title};
        background: ${(props) => props.theme.colors.background};
    }
    html{
        font-size: 62.5%;
    }
    section{
        width: 100%;
    }
`;

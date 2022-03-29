import { createGlobalStyle } from 'styled-components';

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
        color: ${({ theme: { colors } }) => colors.gray};
        font-family: 'Inter', sans-serif;
    }
    body{
        color: ${(props) => props.theme.colors.title};
        background: ${(props) => props.theme.colors.background};
        overflow-x: hidden;
    }
    html{
        font-size: 62.5%;
    }
    section{
        width: 100%;
    }
    button {
        cursor: pointer;
        transition: opacity .3s;
    }
    button:hover {
        opacity: 0.4;
    }
    * {
        transition: background .6s, color .6s;
    }
`;

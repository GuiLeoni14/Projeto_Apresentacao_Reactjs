import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme: { colors } }) => colors.background};
`;
export const Top = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > h1 {
        font-size: 4rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.gray};
        > strong {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
    > p {
        margin-top: 2rem;
        text-align: center;
        font-size: 2rem;
        max-width: 80rem;
    }
`;
export const Bottom = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Left = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    > div:first-child {
        width: 100%;
        opacity: 0.2;
        background: transparent;
        width: 30rem;
        height: 20rem;
        position: relative;
    }
    svg {
        width: 25rem;
        position: absolute;
    }
`;
export const Right = styled.div`
    width: 100%;
`;

export const Colors = styled.div``;

export const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    > div {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }
    div:nth-child(1) {
        background-color: red;
    }
    div:nth-child(2) {
        background-color: yellow;
    }
    div:nth-child(3) {
        background-color: blue;
    }
`;
export const Color = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    > div {
        width: 5rem;
        height: 5rem;
        border-radius: 20%;
    }
    div:nth-child(1) {
        background-color: black;
    }
    div:nth-child(2) {
        background-color: white;
    }
    div:nth-child(3) {
        background-color: gray;
    }
`;

import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.background};
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
    align-items: center;
    justify-content: center;
    svg {
        width: 20rem;
    }
`;
export const Right = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
        width: 100%;
        max-width: 35rem;
        border-radius: 3rem;
    }
`;

export const Colors = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

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
    margin-top: 2rem;
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

export const Description = styled.div`
    > h3 {
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
        > strong {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
    p {
        font-size: 1.4rem;
        text-align: justify;
    }
`;

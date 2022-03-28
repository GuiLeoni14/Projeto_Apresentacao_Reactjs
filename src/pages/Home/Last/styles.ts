import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        > h1 {
            font-size: 4rem;
            > strong {
                color: ${({ theme }) => theme.colors.second};
            }
        }
    }
`;

export const Languages = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    > span {
        font-size: 6rem;
        color: #fff;
    }
    > img {
        width: 15rem;
        height: 15rem;
    }
    img:last-of-type {
        cursor: pointer;
    }
`;

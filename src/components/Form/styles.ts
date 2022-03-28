import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 55rem;
    background-color: ${({ theme }) => theme.colors.second};
    border-radius: 1rem;
    padding: 5rem;
    position: relative;
    > h2 {
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors.white};
        > strong {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
    > button {
        margin-top: 2rem;
        font-size: 2.5rem;
        line-height: 4.5rem;
        padding: 0rem 4rem;
        border-radius: 2rem;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
    }
`;

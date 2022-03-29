import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray};
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    form {
        margin-top: -10rem;
    }
`;
export const UserInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > h2 {
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
        color: ${({ theme }) => theme.colors.white};
        > strong {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
    button {
        margin-top: 2rem;
        font-size: 2.5rem;
        line-height: 4.5rem;
        padding: 0rem 4rem;
        border-radius: 2rem;
        background-color: ${({ theme }) => theme.colors.second};
        color: ${({ theme }) => theme.colors.primary};
    }
`;

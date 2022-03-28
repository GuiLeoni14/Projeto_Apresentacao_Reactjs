import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray};
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
export const UserInfo = styled.div`
    > h2 {
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
        color: ${({ theme }) => theme.colors.white};
        > strong {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

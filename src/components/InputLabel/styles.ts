import styled from 'styled-components';
import { TextField } from '@mui/material';
export const Container = styled(TextField)`
    width: 100%;
    input {
        color: ${({ theme }) => theme.colors.white};
    }
    label {
        color: ${({ theme }) => theme.colors.white};
    }
    & + div {
        margin-top: 2rem;
    }
`;

import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
export const Container = styled(Dialog.Root)``;
export const Button = styled(Dialog.Trigger)`
    cursor: pointer;
    transition: all 0.3s;
    white-space: nowrap;
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 5.4rem;
    padding: 0rem 1.5rem;
    border-radius: 1rem;
    font-size: 1.8rem;
    margin: 4rem;
    color: ${({ theme }) => theme.colors.second};
    background-color: ${({ theme }) => theme.colors.background};
    & > img {
        margin-right: 0.8rem;
    }
`;
export const ButtonCancel = styled(Dialog.Close)`
    cursor: pointer;
    transition: all 0.3s;
    white-space: nowrap;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    text-transform: uppercase;
    line-height: 1.7rem;
    color: ${({ theme }) => theme.colors.primary};
`;
export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    z-index: 2022;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Content = styled(Dialog.Content)`
    width: 100%;
    max-width: 31.5rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 40rem;
    padding: 5rem 0rem;
    justify-content: center;
    box-shadow: 0rem 0rem 1rem #000;
`;

export const IconContent = styled(motion.div)`
    margin: 2rem;
    > img {
        cursor: pointer;
        width: 10rem;
        height: 10rem;
    }
`;

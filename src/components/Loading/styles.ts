import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    z-index: 2147483647777;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
`;
export const Animate = styled(motion.div)`
    width: 10rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
`;

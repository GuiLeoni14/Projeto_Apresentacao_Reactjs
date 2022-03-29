import { ReactNode } from 'react';

import { Container, Animate } from './styles';
function Loading() {
    return (
        <Container>
            <Animate
                animate={{
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                }}
                transition={{
                    duration: 1.5,
                    ease: 'easeInOut',
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
            />
        </Container>
    );
}

export default Loading;

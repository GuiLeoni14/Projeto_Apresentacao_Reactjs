import { ReactNode } from 'react';
import { Container } from './styles';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Animate } from './styles';
import Hero from './Hero';
function Home() {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 0.75], [0, 1]);
    return (
        <Container>
            <h1>Home</h1>
            {/* <Animate
                animate={{
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                }}
                transition={{
                    duration: 2,
                    ease: 'easeInOut',
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
                style={{
                    scale: scale,
                    position: 'sticky',
                    top: '0rem',
                    left: '0rem',
                }}
            /> */}
            <Hero />
        </Container>
    );
}

export default Home;

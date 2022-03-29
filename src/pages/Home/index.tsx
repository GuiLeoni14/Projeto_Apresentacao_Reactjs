import { ReactNode } from 'react';
import { Container } from './styles';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Animate } from './styles';
import Hero from './Hero';
import { MainContainer } from '../../styles/container';
import FormExample from './FormExample';
import Last from './Last';
function Home({ toggleTheme }: { toggleTheme(): void }) {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 0.75], [0, 1]);
    return (
        <Container>
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
            <FormExample />
            <Last toggleTheme={toggleTheme} />
        </Container>
    );
}

export default Home;

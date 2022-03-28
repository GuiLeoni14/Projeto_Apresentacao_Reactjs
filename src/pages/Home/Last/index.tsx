import { ReactNode, useState } from 'react';
import Modal from '../../../components/Modal';
import Slide from '../../../components/Slide';
import { MainContainer } from '../../../styles/container';
import icon_js from '../../../assets/img/icon-js.svg';
import icon_react from '../../../assets/img/icon-react.svg';
import { Container, Languages } from './styles';
import { motion } from 'framer-motion';
function Last({ toggleTheme }: { toggleTheme(): void }) {
    const [rotate, setRotate] = useState([0, 360, 0]);
    return (
        <Container>
            <MainContainer>
                <h1>
                    Alguns <strong>exemplos</strong>
                </h1>
                <Slide />
                <Modal toggleTheme={toggleTheme} />
                <Languages>
                    <motion.img src={icon_js} />
                    <span>+</span>
                    <motion.img
                        src={icon_react}
                        animate={{
                            rotate: rotate,
                        }}
                        transition={{
                            duration: 2,
                            ease: 'linear',
                            times: [0, 1, 2],
                            repeat: Infinity,
                            repeatDelay: 0,
                        }}
                        onClick={() => setRotate(rotate[0] === 0 ? [360, 0, 260] : [0, 360, 0])}
                    />
                </Languages>
            </MainContainer>
        </Container>
    );
}

export default Last;

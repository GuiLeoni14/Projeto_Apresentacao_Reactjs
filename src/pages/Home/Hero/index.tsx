import { ReactNode } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { Container, Top, Bottom, Colors, Left, Right, Background, Color, Description } from './styles';
import criador from '../../../assets/img/criador.jpg';
import { MainContainer } from '../../../styles/container';
function Hero() {
    const [stateSvg, setStateSvg] = useState({
        animate: false,
        rotate: 0,
        background: 'yellow',
        color: 'black',
    });
    const constraintsRef = useRef(null);
    return (
        <Container>
            <MainContainer>
                <Top data-aos="fade-down">
                    <h1>
                        Porque usar <strong>o JavaScript?</strong>
                    </h1>
                    <p>
                        JavaScript é uma linguagem de programação universal, multiplataforma e segue sendo a linguagem
                        mais popular no mundo inteiro nos últimos sete anos.
                    </p>
                </Top>
                <Bottom>
                    <Left data-aos="fade-right">
                        <motion.div
                            animate={{
                                rotate: [0, 90, 270, 360, 0],
                            }}
                            transition={{
                                duration: 1,
                                ease: 'easeInOut',
                                times: [0, 0.2, 0.5, 0.8, 1],
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label="JavaScript"
                                role="img"
                                viewBox="0 0 512 512"
                            >
                                <rect width="512" height="512" rx="15%" fill={stateSvg.background} />
                                <path
                                    fill={stateSvg.color}
                                    d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"
                                />
                            </svg>
                        </motion.div>
                        <Colors>
                            <Background>
                                <motion.div
                                    onClick={() => setStateSvg({ ...stateSvg, background: 'red' })}
                                    whileHover={{ scale: 1.1, boxShadow: '0rem 0rem 1rem #ccc' }}
                                    whileTap={{ scale: 0.9 }}
                                />
                                <motion.div
                                    onClick={() => setStateSvg({ ...stateSvg, background: 'yellow' })}
                                    whileHover={{ scale: 1.1, boxShadow: '0rem 0rem 1rem #ccc' }}
                                    whileTap={{ scale: 0.9 }}
                                />
                                <motion.div
                                    onClick={() => setStateSvg({ ...stateSvg, background: 'blue' })}
                                    whileHover={{ scale: 1.1, boxShadow: '0rem 0rem 1rem #ccc' }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            </Background>
                            <Color>
                                <motion.div
                                    onClick={() => setStateSvg({ ...stateSvg, color: 'black' })}
                                    whileHover={{ scale: 1.1, boxShadow: '0rem 0rem 1rem #ccc' }}
                                    whileTap={{ scale: 0.9 }}
                                />
                                <motion.div
                                    onClick={() => setStateSvg({ ...stateSvg, color: 'white' })}
                                    whileHover={{ scale: 1.1, boxShadow: '0rem 0rem 1rem #ccc' }}
                                    whileTap={{ scale: 0.9 }}
                                />
                                <motion.div
                                    onClick={() => setStateSvg({ ...stateSvg, color: 'gray' })}
                                    whileHover={{ scale: 1.1, boxShadow: '0rem 0rem 1rem #ccc' }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            </Color>
                        </Colors>
                    </Left>
                    <Right data-aos="fade-left">
                        <img src={criador} />
                        <Description>
                            <h3>
                                <strong>Brendan Eich</strong>
                            </h3>
                            <p>
                                JavaScript é uma linguagem de programação que permite a você implementar itens complexos
                                em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a
                                você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo,
                                mapas interativos ou gráficos 2D/3D animados, etc.
                            </p>
                        </Description>
                    </Right>
                </Bottom>
            </MainContainer>
        </Container>
    );
}

export default Hero;

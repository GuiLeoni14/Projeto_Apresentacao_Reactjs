import { ReactNode } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { Container, Top, Bottom, Colors, Left, Right, Background, Color } from './styles';
import icon_js from '../../../assets/img/icon-js.svg';
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
            <Top>
                <h1>
                    De onde e porque <strong>surgiu o JavaScript?</strong>
                </h1>
                <p>
                    JavaScript é uma linguagem de programação universal, multiplataforma e segue sendo a linguagem mais
                    popular no mundo inteiro nos últimos sete anos.
                </p>
            </Top>
            <Bottom>
                <Left>
                    <motion.div className="drag-area" ref={constraintsRef} />
                    <motion.svg drag dragConstraints={constraintsRef}>
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
                    </motion.svg>
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
                <Right></Right>
            </Bottom>
        </Container>
    );
}

export default Hero;

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Form from '../Form';
import { motion } from 'framer-motion';
import icon_sun from '../../assets/img/icon-sun.svg';
import icon_moon from '../../assets/img/icon-moon.svg';
import { Container, Overlay, Content, Button, ButtonCancel, IconContent } from './styles';
function Modal({ toggleTheme }: { toggleTheme(): void }) {
    const theme = useContext(ThemeContext);
    return (
        <Container>
            <Button>Abrir modal</Button>
            <Overlay>
                <Content>
                    <h1>Altere o tema do site</h1>
                    <IconContent
                        animate={{
                            rotate: [0, 360, 0],
                        }}
                        transition={{
                            duration: 2,
                            ease: 'linear',
                            times: [0, 1, 2],
                            repeat: Infinity,
                            repeatDelay: 0,
                        }}
                    >
                        {theme.title === 'light' ? (
                            <motion.img src={icon_sun} alt="" onClick={toggleTheme} />
                        ) : (
                            <motion.img src={icon_moon} alt="" onClick={toggleTheme} />
                        )}
                    </IconContent>
                    <ButtonCancel>Fechar</ButtonCancel>
                </Content>
            </Overlay>
        </Container>
    );
}

export default Modal;

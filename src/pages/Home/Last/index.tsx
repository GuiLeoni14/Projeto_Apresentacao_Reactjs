import { ReactNode } from 'react';
import Modal from '../../../components/Modal';
import Slide from '../../../components/Slide';
import { MainContainer } from '../../../styles/container';

import { Container } from './styles';

function Last() {
    return (
        <Container>
            <MainContainer>
                <h1>
                    Alguns <strong>exemplos que utilizamos</strong> aqui na empresa
                </h1>
                <Modal />
                <Slide />
            </MainContainer>
        </Container>
    );
}

export default Last;

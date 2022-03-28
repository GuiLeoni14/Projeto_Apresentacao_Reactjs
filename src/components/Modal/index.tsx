import { Container, Overlay, Content, Button, ButtonCancel } from './styles';
function Modal() {
    return (
        <Container>
            <Button>Nova tarefa</Button>
            <Overlay>
                <Content>
                    <h1>MODAL</h1>
                </Content>
                <ButtonCancel>Fechar</ButtonCancel>
            </Overlay>
        </Container>
    );
}

export default Modal;

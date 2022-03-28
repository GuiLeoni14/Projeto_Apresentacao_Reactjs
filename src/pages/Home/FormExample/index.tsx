import { TextField } from '@mui/material';
import { ReactNode, useState } from 'react';
import Form from '../../../components/Form';
import InputLabel from '../../../components/InputLabel';
import Loading from '../../../components/Loading';
import { MainContainer } from '../../../styles/container';
import { TypeUser } from '../../../types/User';

import { Container, UserInfo } from './styles';

function FormExample() {
    const [user, setUser] = useState<TypeUser>({} as TypeUser);
    return (
        <Container>
            <MainContainer>
                <Form setUser={setUser} />
                <UserInfo>
                    {user.name ? (
                        <>
                            <h2>
                                Olá <strong>{user.name}</strong>, seja bem-vindo ao sistema
                            </h2>
                            <button>Sair</button>
                        </>
                    ) : (
                        <h2>
                            Realize sua <strong>autenticação</strong>
                        </h2>
                    )}
                </UserInfo>
            </MainContainer>
        </Container>
    );
}

export default FormExample;

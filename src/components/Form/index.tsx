import { ChangeEvent, FormEvent, ReactNode, useState } from 'react';
import { TypeUser } from '../../types/User';
import InputLabel from '../InputLabel';
import Loading from '../Loading';
import { Container } from './styles';

function Form({ setUser }: { setUser(user: TypeUser): void }) {
    const [values, setValues] = useState({} as TypeUser);
    const [isLoading, setIsLoading] = useState(false);
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setUser(values);
            setIsLoading(false);
        }, 2000);
    };
    return (
        <Container onSubmit={handleSubmit} data-aos="flip-right">
            <h2>
                Exemplo de envio de <strong>formulário</strong>
            </h2>
            <InputLabel name="name" type="email" label="Digite seu email" handleChange={handleOnChange} />
            <InputLabel name="senha" type="password" label="Digite sua senha" handleChange={handleOnChange} />
            <button type="submit" disabled={isLoading}>
                Enviar
            </button>
            {isLoading && <Loading />}
        </Container>
    );
}

export default Form;

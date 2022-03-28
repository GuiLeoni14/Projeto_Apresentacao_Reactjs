import { TypeInputLabel } from '../../types/TypeInputLabel';
import { Container } from './styles';

function InputLabel({ label, name, type, handleChange }: TypeInputLabel) {
    return (
        <Container
            label={label}
            type={type}
            name={name}
            InputProps={{ style: { fontSize: 16 } }}
            InputLabelProps={{ style: { fontSize: 16 } }}
            onChange={handleChange}
            required
        />
    );
}

export default InputLabel;

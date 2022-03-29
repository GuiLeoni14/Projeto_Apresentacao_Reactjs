import { ChangeEvent } from 'react';

export type TypeInputLabel = {
    label: string;
    name: string;
    type: string;
    handleChange(event: ChangeEvent<HTMLInputElement>): void;
};

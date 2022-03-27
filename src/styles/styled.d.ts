import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            second: string;
            background: string;
            gray: string;
            title: string;
        };
    }
}

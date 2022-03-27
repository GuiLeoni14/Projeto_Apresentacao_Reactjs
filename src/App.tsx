import MyRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
function App() {
    const [theme, setTheme] = useState(light);
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <MyRoutes toggleTheme={toggleTheme} />
            </ThemeProvider>
        </div>
    );
}

export default App;

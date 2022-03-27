import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import GlobalStyle from '../styles/global';
import { TypeRoutes } from '../types/TypeRoutes';

export default function MyRoutes({ toggleTheme }: TypeRoutes) {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

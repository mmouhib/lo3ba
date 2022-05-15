import Home from './routes/Home';
import { SearchContextProvider } from './context/SearchContext';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './routes/AuthPage';
import { ThemeProvider } from 'styled-components';
import { IThemeContext, themeContext } from './context/ThemeContext';
import { useContext } from 'react';
import GamePage from './routes/GamePage';

const lightTheme = { background: '#ffffff', mainTextColor: '#black' };
const darkTheme = { background: '#181a1b', mainTextColor: '#ffffff' };

export default function App(): JSX.Element {
   const themeData: IThemeContext | null = useContext(themeContext);
   return (
      <ThemeProvider theme={themeData?.theme ? lightTheme : darkTheme}>
         <div style={{ width: '100vw', height: '100vh' }}>
            <SearchContextProvider>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signup" element={<AuthPage />} />
                  <Route path="/game/:id" element={<GamePage />} />
               </Routes>
            </SearchContextProvider>
         </div>
      </ThemeProvider>
   );
}

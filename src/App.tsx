import React, { useContext } from 'react';
import Home from './routes/Home';
import { SearchContextProvider } from './context/SearchContext';
import { Route, Routes } from 'react-router-dom';
import GamesCatalog from './routes/GamesCatalog';
import Game from './models/Game';
import GamePage from './components/GamePage';

export default function App(): JSX.Element {
   // @ts-ignore
   // const {gamesData,setGamesData} = useContext(SearchContextProvider);

   return (
      <div style={{ width: '100vw', height: '100vh' }}>
         <SearchContextProvider>
            <Routes>
               <Route path="/" element={<GamePage />} />
               {/*<Route path="/" element={<GamesCatalog />} />*/}
               {/*<Route path="/" element={<Home />} />*/}
            </Routes>
         </SearchContextProvider>
      </div>
   );
}

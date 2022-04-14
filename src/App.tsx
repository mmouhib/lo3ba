import React, { useContext } from 'react';
import Home from './routes/Home';
import { SearchContextProvider } from './context/SearchContext';
import { Route, Routes } from 'react-router-dom';
import GamesCatalog from './routes/GamesCatalog';
import Game from './models/Game';
import GamePage from './components/GamePage';
import SignUp from './forms/SignUp';

export default function App(): JSX.Element {
   // const {gamesData,setGamesData} = useContext(SearchContextProvider);

   return (
      <div style={{ width: '100vw', height: '100vh' }}>
         <SearchContextProvider>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/signup" element={<SignUp />} />
               {/*<Route path="/" element={<GamePage />} />*/}
               {/*<Route path="/" element={<GamesCatalog />} />*/}
            </Routes>
         </SearchContextProvider>
      </div>
   );
}

import React, { useContext } from 'react';
import Home from './routes/Home';
import { SearchContextProvider } from './context/SearchContext';
import { Route, Routes } from 'react-router-dom';
import SignUp from './routes/SignUp';

export default function App(): JSX.Element {
   // const {gamesData,setGamesData} = useContext(SearchContextProvider);

   return (
      <div style={{ width: '100vw', height: '100vh' }}>
         <SearchContextProvider>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/signup" element={<SignUp />} />
            </Routes>
         </SearchContextProvider>
      </div>
   );
}

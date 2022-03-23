import React from 'react';
import Home from './routes/Home';
import { SearchContextProvider } from './context/SearchContext';
import { Route, Routes } from 'react-router-dom';

export const App = () => (
   <div style={{ width: '100vw', height: '100vh' }}>
      <SearchContextProvider>
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </SearchContextProvider>
   </div>
);

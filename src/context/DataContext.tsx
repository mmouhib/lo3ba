import { createContext, useState } from 'react';
import React from 'react';

interface ContextProviderProps {
   children: React.ReactNode;
}

export const dataContext = createContext<object | null>(null);

export const SearchContextProvider = (props: ContextProviderProps): JSX.Element => {
   const [gamesData, setGamesData] = useState(null);
   return (
      <dataContext.Provider value={{ gamesData, setGamesData }}>
         {props.children}
      </dataContext.Provider>
   );
};

import { createContext, useState } from 'react';
import React from 'react';

interface ContextProviderProps {
   children: React.ReactNode;
}

export const searchContext = createContext<any>(null);

export const SearchContextProvider = (props: ContextProviderProps): JSX.Element => {
   const [searchValue, setSearchValue] = useState<string>('');
   return (
      <searchContext.Provider value={{ searchValue, setSearchValue }}>
         {props.children}
      </searchContext.Provider>
   );
};

import Home from './components/Home';
import { SearchContextProvider } from './context/SearchContext';

export const App = () => (
   <div style={{ width: '100vw', height: '100vh' }}>
      <SearchContextProvider>
         <Home />
      </SearchContextProvider>
   </div>
);

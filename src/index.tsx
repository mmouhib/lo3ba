import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import './global.css';
import { BrowserRouter } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';

ReactDOM.render(
   <React.StrictMode>
      <ChakraProvider>
         <BrowserRouter>
            <ThemeContext>
               <App />
            </ThemeContext>
         </BrowserRouter>
      </ChakraProvider>
   </React.StrictMode>,
   document.getElementById('root')
);

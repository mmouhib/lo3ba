import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import './global.css'

ReactDOM.render(
   <React.StrictMode>
      <ChakraProvider>
         <App />
      </ChakraProvider>
   </React.StrictMode>,
   document.getElementById('root')
);

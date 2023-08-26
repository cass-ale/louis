import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ButtonScrollProvider } from './context/ButtonScroll.jsx'
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ButtonScrollProvider>
    <App />
    </ButtonScrollProvider>
    </ChakraProvider>
  </React.StrictMode>,
)

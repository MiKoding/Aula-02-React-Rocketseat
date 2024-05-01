import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import {defaultTheme} from './styles/themes/default';
import './App.css'
import { Router } from './Router';

function App() {
  return (
    //Context providers
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
         <Router/>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    
  )
}

export default App

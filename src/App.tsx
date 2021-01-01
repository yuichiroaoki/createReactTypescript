import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;

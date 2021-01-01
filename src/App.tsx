import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <img src={logo} className="App-logo" alt="logo" />
      </ThemeProvider>
    </div>
  );
}

export default App;

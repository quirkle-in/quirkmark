import React from 'react';
import './App.css';

import AppRouter from './components/Router';
import PageComponent from './components/PageComponent';
import { ThemeProvider } from '@emotion/react';
import theme from './utils/theme';

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <PageComponent>
          <AppRouter />
        </PageComponent>
      </ThemeProvider>
    </div>
  );
}

export default App;
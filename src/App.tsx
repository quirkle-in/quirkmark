import React from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import AppRouter from './components/Router';

const markdown = `Just a link: https://reactjs.com.`;

const App: React.FC  = () => {
  return (
    <div className="App">
      {/* <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} /> */}
      <AppRouter />
    </div>
  );
}

export default App;
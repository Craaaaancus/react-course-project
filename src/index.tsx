import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './app/styles/index.scss';
import { ThemeProvider } from './app/providers/ThemeProvider'

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

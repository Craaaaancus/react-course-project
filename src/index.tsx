import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './styles/index.scss';
import ThemeProvider from "./theme/ThemeProvider";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

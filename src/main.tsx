import React from 'react';
import ReactDOM from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import App from './App';
import { CurrencyProvider } from './context/Currency';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </MotionConfig>
  </React.StrictMode>,
);

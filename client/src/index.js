import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ScrollToTop from './helpers/scrollToTop';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
        <ScopedCssBaseline>
      <App />
        </ScopedCssBaseline>
    </BrowserRouter>
  </Provider>,
);

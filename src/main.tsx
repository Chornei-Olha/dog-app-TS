import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import { api } from './services/api';

import App from './App';
import './index.css';
import { DogAppThemeProvider } from './theme';
import { Main, BreedsPage, Favorite } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: 'breeds',
        element: <BreedsPage />
      },
      {
        path: 'vote',
        element: <h2>Vote</h2>
      },
      {
        path: 'history',
        element: <h2>history</h2>
      },
      {
        path: 'favorite',
        element: <Favorite />
      },
      {
        path: 'your-uploads',
        element: <h2>Your uploads</h2>
      },
      {
        path: '*',
        element: <div>Error 404</div>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <DogAppThemeProvider>
        <RouterProvider router={router} />
      </DogAppThemeProvider>
    </ApiProvider>
  </React.StrictMode>
);

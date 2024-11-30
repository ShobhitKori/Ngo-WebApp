import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '.';
import { RouterProvider,  createBrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import LandingPage from './components/LandingPage.tsx';
import Signup from './components/Signup.tsx';
import Login from './components/Login.tsx';

const router = createBrowserRouter([
  { path: "/", element: <LandingPage />},
  { path: "/signup", element: <Signup />},
  { path: "/signin", element: <Login />},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home/';
import Forgot from './pages/Forgot/';
import Login from './pages/Login/';
import SignUp from './pages/SignUp/';
import Products from './pages/Products/';
import App from './pages/App/'
import ProductDetail from './pages/ProductDetail'
import History from './pages/History';
import Payment from './pages/Payments';
import Profile from '../src/pages/Profile'

import PrivateRoute, { IsLogin } from './utils/wrapper/privateRoute'
import DataNotFound from './pages/DataNotFound';

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <DataNotFound /> },
  {
    path: "/login",
    element: (
      <IsLogin>
        <Login />
      </IsLogin>
    ),
  },
  {
    path: "/signup",
    element: (
      <IsLogin>
        <SignUp />
      </IsLogin>
    ),
  },
  {
    path: "/forgot",
    element: (
      <IsLogin>
        <Forgot />
      </IsLogin>
    ),
  },
  { path: "/products", element: <Products /> },
  { path: "/app", element: <App name="Fazztrack" age={18} /> },
  { path: "/products/:id", element: (
      <PrivateRoute >
          <ProductDetail />
        </PrivateRoute>
    )
      },
  {
    path: "/history",
    element: (
      <PrivateRoute>
        <History />
      </PrivateRoute>
    ),
  },
  {
    path: "/payments",
    element: (
      <PrivateRoute>
        <Payment />
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
]);

export default router
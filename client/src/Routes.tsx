import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Layout from './components/layouts/Layout';
import Home from './pages/home/Home';
import Project from './pages/project/Project';
import About from './pages/about/About';
import Team from './pages/team/Team';
import AdminLayout from './components/layouts/AdminLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Product from './pages/product/Product'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/projects',
        element: <Project />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/teams',
        element: <Team />,
      },
    ]
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/products',
        element: <Product />,
      }
    ]
  },
])
import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from './components/layouts/AdminLayout'
import AuthLayout from './components/layouts/AuthLayout'
import Layout from './components/layouts/Layout';
import About from './pages/about/About'
import Chartjs from './pages/chartjs/Chartjs'
import Dashboard from './pages/dashboard/Dashboard'
import FirebaseAuth from './pages/firebaseauth/FirebaseAuth'
import FirebaseCRUD from './pages/firebasecrud/FirebaseCRUD'
import FirebaseStorage from './pages/firebasestorage/FirebaseStorage'
import Forgotpassword from './pages/forgotpassword/Forgotpassword'
import GoogleMapAPI from './pages/googlemap/GoogleMapAPI'
import Home from './pages/home/Home'
import HookForm from './pages/hookform/HookForm'
import Jwt from './pages/jwt/Jwt'
import Login from './pages/login/Login'
import PageNotFound from './pages/pagenotfound/PageNotFound'
import PdfCSVExprot from './pages/pdfcsvexport/PdfCSVExprot'
import Project from './pages/project/Project'
import ReactAdmin from './pages/reactadmin/ReactAdmin'
import ReactDataGrid from './pages/reactdatagrid/ReactDataGrid'
import ReactYoutubeAPI from './pages/reactytapi/ReactYoutubeAPI'
import ReduxCart from './pages/reduxcart/ReduxCart'
import Register from './pages/register/Register'
import ProductList from './pages/productList/ProductList'
import Team from './pages/team/Team'

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
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/forgotpassword',
        element: <Forgotpassword />,
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
        path: '/productlist',
        element: <ProductList />,
      },
      {
        path: '/redux',
        element: <ReduxCart />,
      },
      {
        path: '/jwt',
        element: <Jwt />,
      },
      {
        path: '/chartjs',
        element: <Chartjs />,
      },
      {
        path: '/pdfcsvexport',
        element: <PdfCSVExprot />,
      },
      {
        path: '/hookform',
        element: <HookForm />,
      },
      {
        path: '/googlemap',
        element: <GoogleMapAPI />,
      },
      {
        path: '/firebasecrud',
        element: <FirebaseCRUD />,
      },
      {
        path: '/firebaseauth',
        element: <FirebaseAuth />,
      },
      {
        path: '/firebasestorage',
        element: <FirebaseStorage />,
      },
      {
        path: '/reactadmin',
        element: <ReactAdmin />,
      },
      {
        path: '/reactdatagrid',
        element: <ReactDataGrid />,
      },
      {
        path: '/reactytapi',
        element: <ReactYoutubeAPI />,
      },
    ]
  },
])
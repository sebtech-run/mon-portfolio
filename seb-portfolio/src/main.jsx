import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/index.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.jsx'
import Portfolio from './pages/portfolio.jsx'
import Contact from './pages/contact.jsx'
import Competence from './pages/competence.jsx'
import Loisir from './pages/loisir.jsx'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
    children: [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/competences",
      element: <Competence/>
    },
   
    {
      path: "/portfolio",
      element: <Portfolio/>
    },

    {
      path: "/loisirs",
      element: <Loisir/>
    },
   
    {
      path: "/contact",
      element: <Contact/>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/index.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.jsx'
import Portfolio from './pages/portfolio.jsx'
import Contact from './pages/contact.jsx'
import Competence from './pages/competence.jsx'
import Kasa from './pages/kasa.jsx'
import Ohmyfood from './pages/ohmyfood.jsx'
import Booki from './pages/booki.jsx'
import Qwenta from './pages/qwenta.jsx'
import Sophiebluel from './pages/sophiebluel.jsx'




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
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/kasa",
      element: <Kasa/>
    },

    {
      path: "/ohmyfood",
      element: <Ohmyfood/>
    }, 

    {
      path: "/booki",
      element: <Booki/>
    },

    {
      path: "/qwenta",
      element: <Qwenta/>
    },

    {
      path: "/sophiebluel",
      element: <Sophiebluel/>
    }




    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)

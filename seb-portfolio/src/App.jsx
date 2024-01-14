import './App.css'

import { Outlet } from 'react-router-dom'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

function App() {
 
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home.jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'
import Navbar from './assets/Navbar.jsx'
import Footer from './assets/Footer.jsx'
import FNby from "./Routes/FindNearby.jsx"
import BookAppointment from './Routes/BookAppointment.jsx'
import DefaultRoute from './Routes/DefaultRoute.jsx'
const user = true

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoute user={user} />} >
          <Route path='/home' element={<Home />} />
          <Route path='/fnby' element={<FNby />} />
          <Route path='/bookappnt' element={<BookAppointment />} />
          <Route path='*' element={<DefaultRoute/>}/>
        </Route>
        <Route path='/' element={<App />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)


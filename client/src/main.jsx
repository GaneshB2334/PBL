import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home.jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'
import Navbar from './assets/Navbar.jsx'
import Footer from './assets/Footer.jsx'
const user = false
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <ProtectedRoute user={user}>
            <App />
          </ProtectedRoute>} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)


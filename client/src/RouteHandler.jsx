import React, { useEffect, useState } from 'react'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home.jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'
import Navbar from './assets/Navbar.jsx'
import Footer from './assets/Footer.jsx'
import FNby from "./Routes/FindNearby.jsx"
import BookAppointment from './Routes/BookAppointment.jsx'
import DefaultRoute from './Routes/DefaultRoute.jsx'
import userContext from './auth/userContext.js'

const RouteHandler = () => {
    const [user, setuser] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('user')) {
            setuser(true)
        }
    }, [])

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', user)
        }
        else {
            localStorage.removeItem('user')
        }
    }, [user])

    return (
        <BrowserRouter>
            <userContext.Provider value={{ user, setuser }}>
                <Navbar />
                <Routes>
                    <Route element={<ProtectedRoute user={user} />} >
                        <Route path='/home' element={<Home />} />
                        <Route path='/home/fnby' element={<FNby />} />
                        <Route path='/home/bookappnt' element={<BookAppointment />} />
                        <Route path='*' element={<DefaultRoute />} />
                    </Route>
                    <Route path='/' element={<App />} />
                </Routes>
                <Footer />
            </userContext.Provider>
        </BrowserRouter>
    )
}

export default RouteHandler

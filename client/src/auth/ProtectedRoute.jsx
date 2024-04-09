import React from 'react'
import { Navigate } from "react-router-dom"
const ProtectedRoute = ({ children, user, redirect = '/home' }) => {

    if (user) {
        return <Navigate to={redirect} />
    }
    else {
        return children;
    }

}

export default ProtectedRoute

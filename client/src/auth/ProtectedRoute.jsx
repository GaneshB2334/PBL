import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, user,redirect="/" }) => {
    if (!user) {
        return <Navigate to={redirect} />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;

import React, { useContext } from 'react'
import { privateRoutes, publicRoutes } from '../routes'
import SendReportPage from './SendReportPage'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/context'

const RoutesCreator = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    console.log("User logged in " + isAuth.status)
    return (
        // isAuth ?
        //     <Routes>
        //         {privateRoutes.map(route =>
        //             <Route
        //                 path={route.path}
        //                 element={route.element} />)}
        //     </Routes>
        //     :
        //     <Routes>
        //         {[publicRoutes].map(route =>
        //             <Route
        //                 path={route.path}
        //                 element={route.element} />)}
        //     </Routes>
        isAuth.status ?
            <Routes>
                <Route path="/*" element={<Navigate to="/send-report" />} />
                <Route path="/send-report" element={<SendReportPage />} />
            </Routes>
            :
            <Routes>
                <Route path="/*" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
            </Routes>
    )
}

export default RoutesCreator
import React from 'react'
import { privateRoutes, publicRoutes } from '../routes'
import SendReportPage from './SendReportPage'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import { Route, Routes } from 'react-router-dom'

const RoutesCreator = () => {
    const isAuth = false
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
               isAuth ?
            <Routes>
                <Route path="/send-report" element={<SendReportPage />} />
            </Routes>
            :
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
            </Routes>
    )
}

export default RoutesCreator
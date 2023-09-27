import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context/context';
import App from './App';

const Proxy = () => {
    const [isAuth, setIsAuth] = useState({status: false, user_id: 0})

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default Proxy
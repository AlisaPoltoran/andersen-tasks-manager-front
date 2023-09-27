import LoginPage from "./pages/LoginPage";
import SendReportPage from "./pages/SendReportPage";
import SignUpPage from "./pages/SignUpPage";

export const publicRoutes = [
    {path: '/login', element: <LoginPage/>, exact: true},
    {path: '/sign-up', element: <SignUpPage/>, exact: true}
]

export const privateRoutes = [  
    {path: '/send-report', element: <SendReportPage/>, exact: true}
]



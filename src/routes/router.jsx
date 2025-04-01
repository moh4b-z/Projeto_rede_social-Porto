import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/homePage/homePage'
import LoginPage from '../pages/loginPage/loginPage'
import SignUpPage from '../pages/signUpPage/signUpPage'
import ProfilePage from '../pages/profilePage/profilePage'
import ForgotPage from '../pages/forgotPasswordPage/forgotPage'
import UpdatePage from '../pages/updatePassordPage/updatePass'

const router = createBrowserRouter([
    { 
        path: "/", 
        element: <HomePage />
    },
    { 
        path: "/login", 
        element: <LoginPage /> 
    },
    { 
        path: "/signup", 
        element: <SignUpPage /> 
    },
    { 
        path: "/profile", 
        element: <ProfilePage /> 
    },
    { 
        path: "/recover", 
        element: <ForgotPage />
    },
    { 
        path: "/update-passord", 
        element: <UpdatePage />
    }
])

export default router

import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/homePage/homePage'
import LoginPage from '../pages/loginPage/loginPage'
import SignUpPage from '../pages/signUpPage/signUpPage'
import ProfilePage from '../pages/profilePage/profilePage'

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
])

export default router

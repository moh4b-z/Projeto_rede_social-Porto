import { useSearchParams, useNavigate } from 'react-router-dom'
import './homePage.css'


function HomePage(){
    const navigate = useNavigate()
    return (
        <div className='register'>
            <button onClick={() => navigate('/login')} className='login'>Login</button>
            <button onClick={() => navigate('/signup')} className='signUp'>Sign Up</button>
        </div>
    )
}

export default HomePage

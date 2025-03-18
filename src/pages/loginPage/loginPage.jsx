import { useSearchParams, useNavigate } from 'react-router-dom'
import Nextbutton from '../../components/nextPage/nextPage'
import LightHouse from '../../components/lightHouse/lightHouse'
import '../../styles/cssformatting.css'
import './loginPage.css'

function LoginPage(){
    
    
    return( 
    <div className='logoPorto'>
        <main>
            <div>
                <img src="../../assets/logo.png" alt="" />
                <LightHouse/>
            </div>
            <div>
                <div className='card-login'>
                    
                </div>
            </div>
        </main>
    </div>
    )
}

export default LoginPage
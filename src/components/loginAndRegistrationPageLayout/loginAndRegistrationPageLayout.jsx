import LightHouse from '../lightHouse/lightHouse'
import logo from '../../assets/img/logo-dark_mode.png'
import './PageLayout.css'
import {useGoToHomePage} from '../../utils/goToAnotherPage'

export default function LoginAndRegistrationPageLayout({ children }) {
    const goToHomePage = useGoToHomePage()
    return (
        <main>
            <section className='sectionLeft'>
                <button onClick={() => goToHomePage('home')}>
                    <img src={logo} alt="" />
                </button>
                <div className='location-LightHouse'>
                    <LightHouse size="1.1"/>
                </div>
            </section>
            <section className='sectionRight'>
                <div className='card'>
                    <h1>Porto</h1>
                    
                    { children }
                </div>
            </section>
        </main>
    )
}
import LightHouse from '../lightHouse/lightHouse'
import ParallaxWrapper from '../ParallaxWrapper/parallaxWrapper'
import logo from '../../assets/img/logo-dark_mode.png'
import styles from './PageLayout.module.css'
import {useGoToHomePage} from '../../utils/goToAnotherPage'

export default function LoginAndRegistrationPageLayout({ children }) {
    const goToHomePage = useGoToHomePage()
    return (
        
        <main>
            <section className={styles.sectionLeft}>
                <button onClick={() => goToHomePage('home')}>
                    <img src={logo} alt="" />
                </button>
                <div className={styles['location-LightHouse']}>
                    <LightHouse size="1.1"/>
                </div>
            </section>
            <section className={styles.sectionRight}>
                <div className={styles.card}>
                    <h1>Porto</h1>
                    
                    { children }
                </div>
            </section>
        </main>
    )
}
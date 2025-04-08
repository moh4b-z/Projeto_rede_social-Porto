
import logo from '../../assets/img/logo-dark_mode.png'
import {useGoToHomePage} from '../../utils/goToAnotherPage'
import styles from './withinPageLayout.module.css'

export default function WithinPageLayout({ children }) {
    const goToHomePage = useGoToHomePage()
    return (
        <main>
            <section className={styles.sectionLeft}>
                <div>
                    <button onClick={() => goToHomePage('home')}>
                        <img src={logo} alt="" />
                    </button>
                </div>
                <div>
                    <a href="">Meu perfil</a>
                </div>
                <div>
                    <span>Tela Inicial</span>
                </div>
            </section>
            <section className={styles.sectionMain}>                    
                { children }
            </section>
            <section className={styles.sectionRight}>
                <div className={styles.register}>
                    <button 
                        onClick={() => navigate('/login')} 
                        className={styles.login}>
                            Login
                    </button>
                    <button 
                        onClick={() => navigate('/signup')} 
                        className={styles.signUp}>
                            Sign Up
                    </button>
                </div>
                <div id='fieldOfFollowers'>
                    <h2>Seguidos</h2>
                    <div id='followers'></div>
                </div>
            </section>
        </main>
    )
}
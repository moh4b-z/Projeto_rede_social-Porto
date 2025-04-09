import logo from '../../assets/img/logo-dark_mode.png'
import {useGoToHomePage, useGoToLoginPage,useGoToSignUpPage} from '../../utils/goToAnotherPage'
import styles from './withinPageLayout.module.css'
import { useAuth } from '../../contexts/AuthContext'

export default function WithinPageLayout({ children }) {
    const { user, logout, isLoggedIn } = useAuth()
    const goToHomePage = useGoToHomePage()
    const goToLoginPage = useGoToLoginPage()
    const goToSignUpPage = useGoToSignUpPage()
    return (
        <main>
            <section className={styles.sectionLeft}>
                <div>
                    <button onClick={() => goToHomePage('home')}>
                        <img src={logo} alt="" />
                    </button>
                </div>
                {isLoggedIn ? 
                    <div>
                        <div>
                            <img src={user.imagemPerfil} alt="Foto de perfil" width={100} />
                            <h2>{user.nome}</h2>
                        </div>
                        <a href="">Meu perfil</a>
                    </div>
                :
                    false
                }
                
                <div>
                    <span>Tela Inicial</span>
                </div>
            </section>
            <section className={styles.sectionMain}>                    
                { children }
            </section>
            <section className={styles.sectionRight}>
                {isLoggedIn ? 
                    <div id='fieldOfFollowers'>
                        <h2>Seguidos</h2>
                        <div id='followers'></div>
                    </div>
                :   
                <div className={styles.register}>
                    <button 
                        onClick={() => goToLoginPage('/login')} 
                        className={styles.login}>
                            Login
                    </button>
                    <button 
                        onClick={() => goToSignUpPage('/signup')} 
                        className={styles.signUp}>
                            Sign Up
                    </button>
                </div>
                }
                
                
            </section>
        </main>
    )
}
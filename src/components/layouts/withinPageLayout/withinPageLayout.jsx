import { useEffect, useState } from 'react'
import logo from '../../../assets/img/logo-dark_mode.png'
import { useGoToHomePage, useGoToLoginPage, useGoToSignUpPage } from '../../../utils/goToAnotherPage'
import {getUser} from '../../../services/user/getUser'
import ProfileCard from '../../profileCard/profileCard'
import styles from './withinPageLayout.module.css'
import { useAuth } from '../../../contexts/AuthContext'

export default function WithinPageLayout({ children }) {
    const { user, logout, isLoggedIn } = useAuth()
    const goToHomePage = useGoToHomePage()
    const goToLoginPage = useGoToLoginPage()
    const goToSignUpPage = useGoToSignUpPage()

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUser().then(setUsers).catch(console.error)
    }, [])


    return (
        <main>
            <section className={styles.sectionLeft}>
                <div>
                    <button onClick={() => goToHomePage('home')}>
                        <img src={logo} alt="" />
                    </button>
                </div>
                {isLoggedIn ? 
                    <ProfileCard urlIMG={user?.imagemPerfil} nameUser={user?.nome} />
                : false}
                <div className={styles.areaRoutes}>
                    <span>
                        <ion-icon name="home"></ion-icon>
                        Tela Inicial
                    </span>
                </div>
            </section>

            <section className={styles.sectionMain}>                    
                { children }
            </section>

            <section className={styles.sectionRight}>
                {isLoggedIn ? (
                    <div className={styles.fieldOfFollowers}>
                        <h2 className={styles.Seguidos}>Faça novos amigos</h2>
                        <div className={styles.followers}>
                            {
                                users.map((element) => (
                                    <ProfileCard
                                        key={element.id}
                                        urlIMG={element.imagemPerfil}
                                        nameUser={element.nome}
                                    />
                                ))                                
                            }
                        </div>
                    </div>
                ) : (
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
                )}
            </section>
        </main>
    )
}

import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import {getUserName} from '../../services/user/getUser'
import getListPublications from '../../services/Publicacoes/getListPublications'
import WithinPageLayout from '../../components/layouts/withinPageLayout/withinPageLayout'
import Publication from '../../components/publication/publication'
import styles from './profilePage.module.css'

function ProfilePage(){
    const { username } = useParams()
    const [userProfile, setUserProfile] = useState(null)
    const navigate = useNavigate()
    const { user, logout, isLoggedIn } = useAuth()


    const [publications, setPublications] = useState([])
    
    useEffect(() => {
        getListPublications().then(setPublications).catch(console.error)
    }, [])

    useEffect(() => {
        getUserName(username).then(setUserProfile).catch(console.error)
    }, [username])
    return (
        <WithinPageLayout>
            {!userProfile ? (
                <p>Carregando perfil...</p>
            ) : (
                <div className={styles.userProfile}>
                    <div className={styles.imgUser}>
                        <img 
                            src={userProfile.imagemPerfil} 
                            alt=""
                        />
                    </div>
                    <div>
                        <h2>{userProfile.nome}</h2>
                        {
                            isLoggedIn && userProfile.id == user.id?
                                <div>
                                    <button onClick={logout}>
                                        Sair da conta
                                    </button>
                                    <button>
                                        Deletar perfil
                                    </button>
                                    <button>
                                        Editar perfil
                                    </button>
                                </div>
                            :
                                false
                        }
                    </div>
                </div>
            )}
            <div className={styles.scrollPublications}>
                {
                    publications.slice().reverse().map((element) => (
                        <Publication publicacao={element} key={element.id} />
                    ))                                
                }
            </div>
        </WithinPageLayout>
    )
}

export default ProfilePage
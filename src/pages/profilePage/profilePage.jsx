import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import {getUserName, getUserID} from '../../services/user/getUser'
import getListPublications from '../../services/Publicacoes/getListPublications'
import WithinPageLayout from '../../components/layouts/withinPageLayout/withinPageLayout'
import Publication from '../../components/publication/publication'
import ProfileEditing from '../../components/profileEditing/profileEditing'
import styles from './profilePage.module.css'

function ProfilePage(){
    const { username } = useParams()
    const [userProfile, setUserProfile] = useState(null)
    const [editProfile, setEditProfile] = useState(false)
    const navigate = useNavigate()
    const { user, logout, isLoggedIn } = useAuth()


    const [publications, setPublications] = useState([])
    
    useEffect(() => {
        getListPublications().then(setPublications).catch(console.error)
    }, [])

    useEffect(() => {
        getUserName(username).then(setUserProfile).catch(console.error)        
    }, [username])

    const publicacoesDoUsuario = userProfile
        ? publications.filter(pub => pub.idUsuario == userProfile.id).slice().reverse()
        : []
    


    return (
        <WithinPageLayout>
            {!userProfile ? (
                <p>Carregando perfil...</p>
            ) 
            : ( <>
                {
                    editProfile 
                        ? 
                            <ProfileEditing/> 
                        : 
                        <div className={styles.userProfile}>
                            <div className={styles.imgUser}>
                                <img 
                                    src={userProfile.imagemPerfil} 
                                    alt=""
                                />
                            </div>
                            <div className={styles.areaUserProfile}>
                                <h2>{userProfile.nome}</h2>
                                {
                                    isLoggedIn && userProfile.id == user.id?
                                        <div>
                                            <button 
                                                className={styles.buttonUpProfile}
                                                onClick={() => setEditProfile(true)}
                                            >
                                                Editar perfil
                                            </button>
                                            <button onClick={logout} className={styles.buttonLogoutProfile}>
                                                Sair da conta
                                            </button>
                                        </div>
                                    :
                                        false
                                }
                            </div>
                        </div>
                }</>
                
            )}
            <div className={styles.scrollPublications}>
                <p className={styles.Publications}>Puclicações: </p>
            {
                
                publicacoesDoUsuario.length > 0 ? (
                    
                    publicacoesDoUsuario.map((element) => (
                        <Publication publicacao={element} key={element.id} />
                    ))
                ) : (
                    <p className={styles.NoPublications}>
                        Este usuário ainda não publicou nada.
                    </p>
                )
            }
            </div>
        </WithinPageLayout>
    )
}

export default ProfilePage
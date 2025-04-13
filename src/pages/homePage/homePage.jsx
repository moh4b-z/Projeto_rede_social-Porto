import { useSearchParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import getListPublications from '../../services/Publicacoes/getListPublications'
import WithinPageLayout from '../../components/layouts/withinPageLayout/withinPageLayout'
import Publication from '../../components/publication/publication'
import styles from './homePage.module.css'


function HomePage(){
    const { user, logout, isLoggedIn } = useAuth()
    const navigate = useNavigate()
    const [publications, setPublications] = useState([])
    
    useEffect(() => {
        getListPublications().then(setPublications).catch(console.error)
    }, [])
    return (
        <WithinPageLayout>
            <div className={styles.nada}></div>
            <div className={styles.scrollPublications}>
                {
                    publications.map((element) => (
                        <Publication publicacao={element} key={element.id} />
                    ))                                
                }
            </div>
        </WithinPageLayout>
    )
}

export default HomePage

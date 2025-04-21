import { useSearchParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import getListPublications from '../../services/Publicacoes/getListPublications'
import WithinPageLayout from '../../components/layouts/withinPageLayout/withinPageLayout'
import ToSendPublication from '../../components/toSendPublication/toSendPublication'
import Publication from '../../components/publication/publication'
import styles from './homePage.module.css'


function HomePage(){
    const { user, logout, isLoggedIn } = useAuth()
    const navigate = useNavigate()
    const [publications, setPublications] = useState([])
    
    const fetchPublications = () => {
        getListPublications().then(setPublications).catch(console.error)
    }

    useEffect(() => {
        fetchPublications()
    }, [])
    return (
        <WithinPageLayout>
            
            {
                isLoggedIn ?
                    <ToSendPublication onPost={fetchPublications}/>
                :
                    false
            }
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

export default HomePage

import { useAuth } from '../../contexts/AuthContext'
import putLikePublication from '../../services/Publicacoes/likePublication'
import styles from './likes.module.css'
import { useState, useEffect } from 'react'

function Likes({ likes = [], idPublicacao, setCurtidas }) {
    const { user, isLoggedIn } = useAuth()
    const [total, setTotal] = useState(0)
    const [curtiu, setCurtiu] = useState(false)

    // Inicializa estado com base nas props
    useEffect(() => {
        if (isLoggedIn && user && likes) {
            const jaCurtiu = likes.some(c => c.idUsuario === user.id)
            setCurtiu(jaCurtiu)
            setTotal(likes.length)
        }
    }, [likes, user, isLoggedIn])

    const handleCurtir = async () => {
        if (!isLoggedIn) {
            alert('Você precisa estar logado para curtir!')
            return
        }

        if (curtiu) {
            alert("Você já curtiu esta publicação. Em breve será possível remover o like.")
            return
        }

        const resultado = await putLikePublication(idPublicacao, user.id)

        if (resultado) {
            setCurtiu(true)
            setTotal(prev => prev + 1)

            if (setCurtidas) {
                setCurtidas(prev => [...prev, { idUsuario: user.id }])
            }
        } else {
            alert("Erro ao curtir a publicação. Tente novamente.")
        }
    }

    return (
        <button 
            onClick={handleCurtir} 
            className={styles.like} 
            style={{ color: curtiu ? "var(--color-gold)" : "var(--color-seablue)" }}
        >
            <ion-icon name={curtiu ? "heart-sharp" : "heart-outline"}></ion-icon>
            <span style={{ color: curtiu ? "var(--color-gold)" : "var(--color-seablue)" }}>
                {total}
            </span>
        </button>
    );
}

export default Likes

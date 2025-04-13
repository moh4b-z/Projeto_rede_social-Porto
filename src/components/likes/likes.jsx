import { useAuth } from '../../contexts/AuthContext'
import putLikePublication from '../../services/Publicacoes/likePublication'
import styles from './likes.module.css'
import React, { useState, useEffect } from 'react'

function Likes({ likes = [], idPublicacao }) {
    const { user, logout, isLoggedIn } = useAuth()
    const [total, setTotal] = useState(likes.length);
    const [curtiu, setCurtiu] = useState(false);
  
    useEffect(() => {
    if (isLoggedIn) {
        const jaCurtiu = likes.some(c => c.idUsuario === user.id);
        setCurtiu(jaCurtiu);
    }
    }, [likes, user]);

    const handleCurtir = () => {
    if (!isLoggedIn) {
        alert('Você precisa estar logado para curtir!');
        return;
    }
    putLikePublication(idPublicacao, user.id);
    setCurtiu(!curtiu);
    setTotal(curtiu ? total - 1 : total + 1);
    };

    return (
    <button onClick={handleCurtir} className="flex items-center space-x-1">
        <ion-icon name={curtiu ? "heart-sharp" : "heart-outline"}></ion-icon>
        <span>{total}</span>
    </button>
    )
}


export default Likes
import { useAuth } from '../../contexts/AuthContext'
import styles from './comments.module.css'
import React, { useState, useEffect } from 'react'

function Comments({ comments = [] }) {
    const { user, isLoggedIn } = useAuth();
    const [userComments, setUserComments] = useState([]);
    const [commented, setCommented] = useState(false);
    const [showComments, setShowComments] = useState(false);
  
    useEffect(() => {
    async function carregarUsuarios() {
        const dados = await Promise.all(
        comments.map(c => getUserID(c.idUsuario))
        );
        setUserComments(dados);
    }

    if (comments.length > 0) {
        carregarUsuarios();
    }

    if (isLoggedIn) {
        const fezComentario = comments.some(c => c.idUsuario === user.id);
        setCommented(fezComentario);
    }
    }, [comments, user]);

    const escolherIcone = () => {
    if (commented) return "chatbubble-ellipses-sharp";
    if (comments.length > 0) return "chatbubble-ellipses-outline";
    return "chatbubble-outline";
    };

    return (
    <div className={styles.comentariosContainer}>
        <button onClick={() => setShowComments(!showComments)} className={styles.iconeComentario}>
        <ion-icon name={escolherIcone()} className="text-xl text-blue-500"></ion-icon>
        <span>{comments.length}</span>
        </button>

        {showComments && (
        <div className={styles.listaComentarios}>
            {comments.map((comentario, index) => (
            <div key={comentario.id} className={styles.comentario}>
                <img src={userComments[index]?.imagemPerfil} alt="User" className={styles.fotoComentario} />
                <div>
                <p className={styles.nomeComentario}>{userComments[index]?.nome}</p>
                <p>{comentario.descricao}</p>
                </div>
            </div>
            ))}
        </div>
        )}
    </div>
    );
}


export default Comments
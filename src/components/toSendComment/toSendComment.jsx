import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import putCommentPublication from '../../services/Publicacoes/commentPublication'
import styles from './toSendComment.module.css'

function ToSendComment({idPublicacao, onComment }){
    const [description, setDescription] = useState("")
    const {user} = useAuth()

    const handleComentar = async () => {
        if (!description || description == "") {
            alert("Precisa de conteudo o comentario")
            return
        }
        const Comment = {idUser: user.id, descricao: description}
        
        try {
            const response = await putCommentPublication(
                idPublicacao, 
                Comment
            )
            if (response) {
                setDescription('')

                const comentarioFormatado = {
                    ...response,
                    idUsuario: response.idUsuario || user.id 
                }

                setTimeout(() => {
                    onComment?.()
                }, 500)
                  
            }
        } catch (error) {
            console.error("Erro ao comentar:", error)
        }
    }
    return (
      <div className={styles.ToSendComment}>
        <div className={styles.content}>
            <div className={styles.fotoComentario}>
                <img 
                    src={user.imagemPerfil} 
                    alt="User"
                />
            </div>
          <input 
            type="text" 
            placeholder='Adicione um comentário...'
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div className={styles.button}>
            <button onClick={handleComentar}>
                Postar
            </button>
        </div>
      </div>
    )
}

export default ToSendComment
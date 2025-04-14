import { useState, useEffect } from 'react'
import { getUserID } from '../../services/user/getUser'
import {useGoToProfilePage} from '../../utils/goToAnotherPage'
import ToSendComment from '../toSendComment/toSendComment'
import { useAuth } from '../../contexts/AuthContext'
import styles from './comments.module.css'

function Comments({ comments = [], idPublicacao}) {
  const [userComments, setUserComments] = useState([])
  const [comentarios, setComentarios] = useState(comments)
  const { user, isLoggedIn } = useAuth()
  const goToProfilePage = useGoToProfilePage()

  useEffect(() => {
    async function carregarUsuarios() {
      const dados = await Promise.all(
        comentarios.map(c => getUserID(c.idUsuario))
      )
      setUserComments(dados)
    }

    if (comments.length > 0) {
      carregarUsuarios()
    }
  }, [comments])
  const adicionarComentario = async (novoComentario) => {
    setComentarios((prev) => [...prev, novoComentario]);
  
    // Buscar os dados do usuário desse novo comentário
    const dadosUsuario = await getUserID(novoComentario.idUsuario);
    setUserComments((prev) => [...prev, dadosUsuario]);
  }
  

  return (
    <div className={styles.listaComentarios}>
      { isLoggedIn
        ?
          <ToSendComment 
            idPublicacao={idPublicacao}
            onCommentSent={adicionarComentario}
          />
        :
          false
      }
      
      {comentarios.map((comentario, index) => (
        <div key={comentario.id ?? `comentario-${index}`} className={styles.comentario}>
          <div className={styles.fotoComentario}>
            <img 
              src={userComments[index]?.imagemPerfil} 
              alt="User"
              onClick={() => goToProfilePage(userComments[index]?.nome)}
            />
          </div>
          
          <div className={styles.contComents}>
            <h4 
              className={styles.nomeComentario}
              onClick={() => goToProfilePage(userComments[index]?.nome)}
            >
              {userComments[index]?.nome}
            </h4>
            <p>{comentario.descricao}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Comments
import { useState, useEffect } from 'react'
import { getUserID } from '../../services/user/getUser'
import {useGoToProfilePage} from '../../utils/goToAnotherPage'
import styles from './comments.module.css'

function Comments({ comments = [] }) {
  const [userComments, setUserComments] = useState([])
  const goToProfilePage = useGoToProfilePage()

  useEffect(() => {
    async function carregarUsuarios() {
      const dados = await Promise.all(
        comments.map(c => getUserID(c.idUsuario))
      )
      setUserComments(dados)
    }

    if (comments.length > 0) {
      carregarUsuarios()
    }
  }, [comments])

  return (
    <div className={styles.listaComentarios}>
      {comments.map((comentario, index) => (
        <div key={comentario.id} className={styles.comentario}>
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
  );
}

export default Comments;

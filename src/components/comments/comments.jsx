import { useState, useEffect } from 'react'
import { getUserID } from '../../services/user/getUser';
import styles from './comments.module.css';

function Comments({ comments = [] }) {
  const [userComments, setUserComments] = useState([]);

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
  }, [comments]);

  return (
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
  );
}

export default Comments;

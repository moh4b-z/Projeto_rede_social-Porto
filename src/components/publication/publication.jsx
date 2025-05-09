import { useState, useEffect } from 'react'
import {getUserID} from '../../services/user/getUser'
import deletePublication from '../../services/Publicacoes/deletePublication'
import putPublication from '../../services/Publicacoes/putPublication'
import Comments from '../comments/comments'
import CommentButton from '../commentButton/commentButton'
import ToSendComment from '../toSendComment/toSendComment'
import Likes from '../likes/likes'
import { useAuth } from '../../contexts/AuthContext'
import styles from './publication.module.css'
import {useGoToProfilePage} from '../../utils/goToAnotherPage'

function Publication({ publicacao}) {
  const { user, isLoggedIn } = useAuth()
  const [autor, setAutor] = useState(null)
  const [comentarios, setComentarios] = useState([])
  const [likes, setLikes] = useState([])
  const [showComments, setShowComments] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editDescricao, setEditDescricao] = useState(publicacao.descricao)
  const [editImagem, setEditImagem] = useState(publicacao.imagem)

  const goToProfilePage = useGoToProfilePage()

  const carregarDados = async () => {
    try {
      const dadosAutor = await getUserID(publicacao.idUsuario)
      if (!dadosAutor) {
        console.error("Autor não encontrado para ID:", publicacao.idUsuario)
        return
      }
      setAutor(dadosAutor)
      setComentarios(publicacao.comentarios || [])
      setLikes(publicacao.curtidas || [])
    } catch (err) {
      console.error("Erro ao carregar dados da publicação:", err)
    }
  }
  const atualizar = {
      "descricao": editDescricao,
      "dataPublicacao": publicacao.dataPublicacao,
      "imagem": editImagem,
      "local": publicacao.local,
      "idUsuario": publicacao.id
  }
  
  useEffect(() => {
    carregarDados()
  }, [publicacao])
  
  

  if (!autor) return <p style={{color: "var(--color-white)"}}>Carregando publicação...</p>

  return (
    <div className={`${styles.Publications} ${showComments ? styles.comComments : ''}`}>
      <div className={styles.fotoPublications}>
        <img 
          src={autor.imagemPerfil} alt={autor.nome}
          onClick={() => goToProfilePage(autor.nome)}
        />
      </div>
      <div className={styles.areaPublications}>
        <div className={styles.topPublications}>
          <h4 onClick={() => goToProfilePage(autor.nome)}>{autor.nome}</h4>
          <span>{publicacao.dataPublicacao}</span>
        </div>

        


        <div className={styles.textPublications}>
          {isEditing ? (
            <textarea 
              value={editDescricao} 
              onChange={(e) => setEditDescricao(e.target.value)}
            />
          ) : (
            <p>{publicacao.descricao}</p>
          )}
        </div>

        <span>{publicacao.local}</span>

        <div className={styles.midiaPublications}>
          {isEditing ? (
            <input 
              type="text" 
              placeholder="Link da nova imagem" 
              value={editImagem}
              onChange={(e) => setEditImagem(e.target.value)}
            />
          ) : (
            publicacao.imagem && <img src={publicacao.imagem} alt="Imagem da publicação" />
          )}
        </div>

        <div className={styles.areaOptions}>
          {comentarios.length >= 0 && (
            <CommentButton 
              comments={comentarios} 
              onClick={() => setShowComments(!showComments)} 
            />
          )}

          {likes.length >= 0 && (
            <Likes 
              likes={likes} 
              idPublicacao={publicacao.id} 
              setCurtidas={setLikes}
            />
          )}

          {isLoggedIn && publicacao.idUsuario === user.id && (
            <button
              className={styles.deletePublications}
              onClick={() => {
                setIsEditing(true)
                setEditDescricao(publicacao.descricao)
                setEditImagem(publicacao.imagem)
              }}
            >
              <ion-icon name="pencil-sharp"></ion-icon>
            </button>
          )}

          {isLoggedIn && publicacao.idUsuario === user.id && (
            <button
              className={styles.deletePublications}
              onClick={async () => {
                const response = await deletePublication(publicacao.id)
                // console.log(`O response foi: ${response}, para deletar a publicação de id: ${publicacao.id}`)
              }}
            >
              <ion-icon name="trash"></ion-icon>
            </button>
          )}

          {isEditing && (
            <button
              className={styles.saveButton}
              onClick={async () => {
                // Aqui você chama sua função de atualizar a publicação
                const response = await putPublication( atualizar, publicacao.id)
                console.log(response)
                setIsEditing(false)
              }}
            >
              Enviar
            </button>
          )}

        </div>

        <div className={`${showComments ? styles.areaComments : ''}`}>
          {
            showComments && (
              <>
                {isLoggedIn && (
                  <ToSendComment 
                    idPublicacao={publicacao.id}
                    onComment={carregarDados}
                  />
                )}
                <Comments 
                  comments={comentarios}
                  idPublicacao={publicacao.id} 
                />
              </>
            )
          }
        </div>

      </div>
    </div>
  );
}

export default Publication
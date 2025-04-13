import React, { useState, useEffect } from 'react'
import {getUserID} from '../../services/user/getUser'
import Comments from '../comments/comments'
import Likes from '../likes/likes'
import { useAuth } from '../../contexts/AuthContext'
import styles from './publication.module.css'

function Publication({ publicacao}) {
  const { user, logout, isLoggedIn } = useAuth()
  const [autor, setAutor] = useState(null)
  const [comentarios, setComentarios] = useState([])
  const [likes, setLikes] = useState([])

  useEffect(() => {
    async function carregarDados() {
      try {
        const dadosAutor = await getUserID(publicacao.idUsuario);
        if (!dadosAutor) {
          console.error("Autor não encontrado para ID:", publicacao.idUsuario);
          return;
        }
        setAutor(dadosAutor);
        setComentarios(publicacao.comentarios || []);
        setLikes(publicacao.curtidas || []);
      } catch (err) {
        console.error("Erro ao carregar dados da publicação:", err);
      }
    }
    carregarDados();
  }, [publicacao]);
  

  if (!autor) return <p>Carregando publicação...</p>;

  return (
    <div className={styles.Publications}>
      <div className={styles.fotoPublications}>
        <img src={autor.imagemPerfil} alt={autor.nome}/>
      </div>
      <div className={styles.areaPublications}>
        <div>
          <h4 className="font-bold">{autor.nome}</h4>
          <p className="text-sm text-gray-500">{publicacao.dataPublicacao} - {publicacao.local}</p>
        </div>
        <p className="mb-2">{publicacao.descricao}</p>
        <img src={publicacao.imagem} alt="Imagem da publicação" className="w-full rounded-xl mb-4" />
        
        <div className={styles.areaOptions}>
          <Likes 
            curtidas={likes} 
            idPublicacao={publicacao.id} 
          />
          <Comments 
            comentarios={comentarios}
          />
        </div>
      </div>
    </div>
  );
}



export default Publication

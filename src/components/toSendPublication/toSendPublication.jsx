import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import postPublication from '../../services/Publicacoes/postPublication'
import ImageInputToggle from '../imageInputToggle/ImageInputToggle'
import styles from './toSendPublication.module.css'

function ToSendPublication(){
    const [description, setDescription] = useState("")
    const [imgUrlPublication, setImgUrlPublication] = useState("")
    const [local, setLocal] = useState("")
    const {user} = useAuth()

    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0')
    const mes = String(hoje.getMonth() + 1).padStart(2, '0')
    const ano = hoje.getFullYear()
    const dataFormatada = `${dia}/${mes}/${ano}`


    const handlePublication = async () => {
        if (!description || description == "") {
            alert("Precisa de conteudo o comentario")
            return
        }
        const Publication = {
            "descricao": description,
            "dataPublicacao": dataFormatada,
            "imagem": imgUrlPublication,
            "local": local,
            "idUsuario": user.id
        }
        
        try {
            const response = await postPublication(
                Publication
            )
            console.log(response);
            
            if (response) {
                setDescription('')
                setImgUrlPublication('')
                setLocal('')
            }
        } catch (error) {
            console.error("Erro ao comentar:", error)
        }
    }
    return (
      <div className={styles.ToSendPublication}>
        <div className={styles.content}>
            <div className={styles.fotoComentario}>
                <img 
                    src={user.imagemPerfil} 
                    alt="User"
                />
            </div>
            <textarea 
                type="text"
                rows="3"
                placeholder='Adicione um comentário...'
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        {imgUrlPublication && (
            <div className={styles.previewImage}>
                <img src={imgUrlPublication} alt="Preview" />
            </div>
        )}
        <div className={styles.button}>
            <div className={styles.inputIcones}>
                <ImageInputToggle imgUrl={imgUrlPublication} setImgUrl={setImgUrlPublication} />
                <div className={styles.inputLocal}>
                    <ion-icon name="earth-outline"></ion-icon>
                    <input 
                        type="text"
                        placeholder='Adicione um local...'
                        value={local} 
                        onChange={(e) => setLocal(e.target.value)}
                    />
                </div>
            </div>
            <button onClick={handlePublication}>
                Postar
            </button>
        </div>
      </div>
    )
}

export default ToSendPublication
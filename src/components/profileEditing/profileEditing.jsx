import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import deleteUser from '../../services/user/deleteUser'
import putUser from '../../services/user/putUser'
import ImageInputToggle from '../imageInputToggle/ImageInputToggle'
import styles from './profileEditing.module.css'

function ProfileEditing({ setEditProfile }){
    const { user, logout} = useAuth()
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senhaRecuperacao, setSenhaRecuperacao] = useState("")
    const [imagemPerfil, setImagemPerfil] = useState("")
    const [toDeleteProfile, setToDeleteProfile] = useState(false)
    const [toImgrofile, setToImgProfile] = useState(false)


    const handlePut = async () => {
        if (!email && !nome && !senhaRecuperacao && !imagemPerfil) {
            setEditProfile(false)
        }else{
            try {
                const response = await putUser(
                    nome || user.nome,
                    email || user.emal,
                    imagemPerfil || user.imagemPerfil,
                    senhaRecuperacao || user.senhaRecuperacao,
                    user.id
                )
                console.log(response)
            } catch (error) {
                console.error("Erro ao atualizar:", error)
            }
            setEditProfile(false)
        }
    }


    return (
        <div className={styles.allEdit}>
            <div className={styles.topOfEdit}>
                <div>
                    <div className={styles.imagemPerfil}>
                        <img src={user.imagemPerfil} alt={user.nome} />
                    </div>
                    <div>
                        <p>Alterar foto de perfil:</p>
                        <button className={styles.buttonN} >Remover foto</button>
                        <button className={styles.buttonN}>Mudar foto</button>
                        {}
                    </div>
                </div>
                
                <div>
                    <button onClick={handlePut}>Fechar e Salvar</button>
                </div>
            </div>
            <div className={styles.theInputs}>
                <input 
                    id='nomeUser' 
                    type="text" 
                    placeholder={`Nome: ${user.nome}`} 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)}
                />
                <input 
                    id='emailUser' 
                    type="email" 
                    placeholder={`E-mail: ${user.email}`}  
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    id='senhaRecuperacao' 
                    type="text" 
                    placeholder='Código para redefinir senha:' 
                    value={senhaRecuperacao} 
                    onChange={(e) => setSenhaRecuperacao(e.target.value)}
                />
            </div>
            <div>
                {toDeleteProfile 
                ? 
                    <div className={styles.wantToDelete}>
                        <p>Esta ação não pode ser desfeita, deseja excluir o perfil?</p>
                        <div>
                            <button
                                className={styles.buttonN}
                                onClick={async () => {
                                  const response = await deleteUser(user.id)
                                  console.log(`O response foi: ${response}`)
                                  response && logout()
                                }}
                            >
                                Sim
                            </button>
                            <button 
                                className={styles.buttonN}
                                onClick={() => setToDeleteProfile(false)}
                            >
                                Não
                            </button>
                        </div>
                    </div>
                :
                    <div>
                        <button 
                            className={styles.buttonN}
                            onClick={() => setToDeleteProfile(true)}
                        >
                            Excluir perfil
                        </button>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default ProfileEditing
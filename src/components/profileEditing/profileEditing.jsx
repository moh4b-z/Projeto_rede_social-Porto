import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import {deleteUser} from '../../services/user/deleteUser'
import {putUser} from '../../services/user/putUser'
import ImageInputToggle from '../imageInputToggle/ImageInputToggle'
import styles from './profileEditing.module.css'

function ProfileEditing(){
    const { user, logout} = useAuth()
    const [toDeleteProfile, setToDeleteProfile] = useState(false)
    const [toImgrofile, setToImgProfile] = useState(false)


    return (
        <div>
            <div>
                <div>
                    <img src={user.imagemPerfil} alt={user.nome} />
                </div>
                <div>
                    <p>Alterar foto de perfil:</p>
                    <button>Remover foto</button>
                    <button>Mudar foto</button>
                    {}
                </div>
                <div>
                    <button>Fechar</button>
                </div>
            </div>
            <div>
                <input type="text" placeholder={user.nome} />
            </div>
            <div>
                {toDeleteProfile 
                ? 
                    <div>
                        <p>Esta ação não pode ser desfeita, deseja excluir o perfil?</p>
                        <div>
                            <button
                                className={styles.deletePublications}
                                onClick={async () => {
                                  const response = await deleteUser(user.id)
                                  console.log(`O response foi: ${response}`)
                                  response && logout
                                }}
                            >
                                Sim
                            </button>
                            <button onClick={setToDeleteProfile(false)}>
                                Não
                            </button>
                        </div>
                    </div>
                :
                    <div>
                        <button onClick={setToDeleteProfile(true)}>
                            Deletar conta
                        </button>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default ProfileEditing
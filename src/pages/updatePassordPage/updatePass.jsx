import './updatePass.css'

import LoginAndRegistrationPageLayout from '../../components/loginAndRegistrationPageLayout/loginAndRegistrationPageLayout'
import {useGoToSignUpPage} from '../../utils/goToAnotherPage'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import putPassword from '../../services/user/putPassword'



function UpdatePage(){
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()

    const handleLogin = async () => {
        if (!senha) {
            alert("Preencha todos os campos!")
            return
        }
        try {
            const userId = localStorage.getItem("userId")
            console.log(userId)

            console.log(senha)
            const response = await putPassword(
                userId,
                senha
            )
            console.log("Usuário cadastrado:", response)

            // Redirecionar para a página de login após cadastro bem-sucedido
            navigate('/login')
        } catch (error) {
            console.error("Erro na alteração de senha:", error)
        }
    }
    
    return( 
        <LoginAndRegistrationPageLayout>
            <input 
                id='newPassword' 
                type="password" 
                placeholder='Nova senha:' 
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />

            
            <button onClick={handleLogin}>Avançar</button>
        </LoginAndRegistrationPageLayout>
    )
}

export default UpdatePage